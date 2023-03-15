import {useRouter} from "next/router";

export default function StaticRoutingPage() {
    const router = useRouter();

    const onClickMove1 = () => {
        router.push('/05-06-static-routed-board-query/1')
    }

    return (
        <>
            <button onClick={onClickMove1}>1번 게시글로 이동</button>
        </>
    )
}

