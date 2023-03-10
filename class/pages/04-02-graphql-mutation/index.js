import {gql,useMutation} from "@apollo/client";

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "철수", title: "오늘은 되는날", contents: "아주 나이스하네요!!"){
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationPage() {
    const [내가만든함수] = useMutation(CREATE_BOARD)
    const onClickSubmit = async () => {
        const result = await 내가만든함수();
        console.log(result)
        alert(result.data.createBoard.message)
    }

    return(
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}