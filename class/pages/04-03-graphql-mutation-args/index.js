import {gql,useMutation} from "@apollo/client";

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ #변수의 타입 적는 곳
        createBoard(writer: $writer, title: $title, contents: $contents){ # 실제 우리가 전달할 변수 적는 곳
            _id
            number
            message
        }
    }
`
export default function GraphqlMutationPage() {
    const [내가만든함수] = useMutation(CREATE_BOARD)
    const onClickSubmit = async () => {
        const result = await 내가만든함수({
            variables: { // variables 이것이 $ 역할을 함
                writer: "정대만",
                title: "3점슛 슈터",
                contents: "포기할 줄 모르는 남자"
            }
        });
        console.log(result)
        alert(result.data.createBoard.message)
    }
    
    return(
        <>
            <button onClick={onClickSubmit}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}