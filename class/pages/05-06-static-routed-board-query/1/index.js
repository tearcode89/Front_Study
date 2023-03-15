import {useQuery, gql} from "@apollo/client";

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
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            number: 239
        }
    })

    console.log(data)

    return (
        <>
            <div>1번 게시글 등록 완료</div>
            <div>작성자: {data ? data.fetchBoard.writer : '데이터가 아직 도착을 안했엉 ㅠㅠ'}</div>
            <div>타이틀: {data && data.fetchBoard.title}</div>
            <div>콘텐츠: {data?.fetchBoard.contents}</div>
        </>
    )
}