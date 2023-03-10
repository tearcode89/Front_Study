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
                <Component />
            </ApolloProvider>
        </>
    )
}

export default MyApp