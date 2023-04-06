import {useQuery, gql} from "@apollo/client";
import {useRouter} from "next/router";

const FETCH_BOARD = gql`
    query fetchBoard($number:Int){
        fetchBoard(number: $number){
            writer,
            title,
            contents
        }
    }
`
export default function StaticRoutedPage() {

    const router = useRouter()

    console.log(router)
    console.log(router.query.CustomIndex)

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.CustomIndex)
        }
    })

    console.log("=====================")
    console.log(data)
    console.log("=====================")

    const onClickMoveToEdit = () => {
        router.push(`/08-05-boards/${router.query.CustomIndex}/edit`)
    }

    return (
        <>
            <div>{router.query.CustomIndex}번 게시글 등록 완료</div>
            <div>작성자: {data ? data.fetchBoard.writer : '데이터가 아직 도착을 안했엉 ㅠㅠ'}</div>
            <div>타이틀: {data && data.fetchBoard.title}</div>
            <div>콘텐츠: {data?.fetchBoard.contents}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기 </button>
        </>
    )
}