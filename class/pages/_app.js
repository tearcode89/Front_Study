import '../styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function MyApp({ Component }) {

    const client = new ApolloClient({
        uri: "https://practice.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache() // 나중에 하기
    })

    return (
        <>
            <ApolloProvider client={client}>
                <div>이 영역은 _app.js의 영역입니다.</div>
                <Component />
            </ApolloProvider>
        </>
    )
}

export default MyApp