import {useState} from "react";
import {useMutation} from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter"
import {CREATE_BOARD} from "./BoardWrite.queries";

export default function BoardWrite(){

    // 자바스크립트 영역
    const [ writer, setWriter ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ contents, setContents ] = useState("");

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
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return(
        <>
            <div>이 영역은 BoardWrite.container의 영역입니다.</div>
            <BoardWriteUI
                onClickSubmit = {onClickSubmit}
                onChangeWriter = {onChangeWriter}
                onChangeTitle = {onChangeTitle}
                onChangeContents  = {onChangeContents}
            />
        </>
    )
}