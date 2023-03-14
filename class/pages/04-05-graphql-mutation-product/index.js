import {gql,useMutation} from "@apollo/client";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ #변수의 타입 적는 곳
        createProduct(seller: $seller, createProductInput: $createProductInput){ # 실제 우리가 전달할 변수 적는 곳
            _id
            number      
            message
        }
    }
`
export default function GraphqlMutationPage() {

    const [내가만든함수] = useMutation(CREATE_PRODUCT)
    const onClickSubmit = async () => {
        // const writer = 'qqq' // 이 함수에 있으며 현재 스코프
        const result = await 내가만든함수({
            variables: { // variables 이것이 $ 역할을 함
                seller:"메시",
                createProductInput: {
                    name: "마우스",
                    detail: "무소음 마우스",
                    price:  12000
                }
            }
        });
        console.log(result)
        alert(result.data.createProduct.message)
    }

    return(
        <button onClick={onClickSubmit}>GraphQL-API(동기) 요청하기</button>
    )
}