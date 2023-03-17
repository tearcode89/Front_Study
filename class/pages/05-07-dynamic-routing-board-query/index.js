import {useRouter} from "next/router";

export default function StaticRoutingPage() {
    const router = useRouter();

    const onClickMove1 = () => {
        router.push('/05-08-dynamic-routed-board-query/432')
    }

    const onClickMove2 = () => {
        router.push('/05-08-dynamic-routed-board-query/777')
    }

    const onClickMove3 = () => {
        router.push('/05-08-dynamic-routed-board-query/598')
    }

    const onClickMove239 = () => {
        router.push('/05-08-dynamic-routed-board-query/387')
    }

    return (
        <>
            <button onClick={onClickMove1}>432번 게시글로 이동</button>
            <button onClick={onClickMove2}>777번 게시글로 이동</button>
            <button onClick={onClickMove3}>598번 게시글로 이동</button>
            <button onClick={onClickMove239}>387번 게시글로 이동</button>
        </>
    )
}

