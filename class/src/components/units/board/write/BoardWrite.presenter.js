export default function BoardWriteUI(props){

    // 자바스크립트 영역

    // HTML 영역(return
    // HTML 영역(return 아래)
    return(
        <>
            <div>이 영역은 BoardWrite.presenter의 영역 입니다.</div>
            작성자: <input type="text" onChange={props.bbb}/><br/>
            제목: <input type="text" onChange={props.ccc}/><br/>
            내용: <input type="text" onChange={props.ddd}/><br/>
            <button onClick={props.aaa}>GRAPHQL-API(동기) 요청하기</button>
        </>
    )
}