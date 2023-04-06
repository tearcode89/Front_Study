import {useState} from "react";
import {useMutation} from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD, UPDATE_BOARD} from "./BoardWrite.queries";
import {useRouter} from "next/router";

export default function BoardWrite(props ){

    const router = useRouter();
    // 자바스크립트 영역
    const [ mycolor, setMycolor ] = useState(false);
    const [ dongsuk, setDongsuk ] = useState(false);
    const [ writer, setWriter ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ contents, setContents ] = useState("");
    const [ updateBoard ] = useMutation(UPDATE_BOARD);

    const [내가만든함수] = useMutation(CREATE_BOARD)
    const onClickSubmit = async () => {
        // const writer = "qqq" // 이 함수에 있으면 현재 스코프
        const result = await 내가만든함수({
            variables: { // variables 이것이 $ 역할을 함
                writer: writer, // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
                title: title,
                contents: contents
            }
        });
        console.log(result)
        alert(result.data.createBoard.message)
        router.push(`/08-05-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        // 1. 수정하기 뮤테이션 날리기
        const result = await updateBoard({
            variables: {
                number: Number(router.query.CustomIndex),
                writer: writer,
                title: title,
                contents: contents
            }
        })
        // 2. 상세페이지로 이동하기
        console.log(result)
        alert(result.data.updateBoard.message)
        router.push(`/08-05-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if(event.target.value !== "" && title !== "" && contents !==""){
            setMycolor( true)
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(writer !== "" && event.target.value !== "" && contents !==""){
            setMycolor(true)
        }
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
        if(writer !== "" && title !== "" && event.target.value !==""){
            setMycolor(true)
        }
    }

    return(
        <>
            <div>이 영역은 BoardWrite.container의 영역입니다.</div>
            <BoardWriteUI
                onClickSubmit = {onClickSubmit}
                onClickUpdate = {onClickUpdate}
                onChangeWriter = {onChangeWriter}
                onChangeTitle = {onChangeTitle}
                onChangeContents  = {onChangeContents}
                mycolor = {mycolor}
                isEdit = {props.isEdit}
                dongsuk = {dongsuk}
                madongsuk = {setDongsuk}
            />
        </>
    )
}