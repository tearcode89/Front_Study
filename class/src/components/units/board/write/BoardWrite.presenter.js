import * as K from './BoardWrite.styles'

// 아래는 export default와 export를 같이 사용하는 방법
// import qqq , { BlueButton, RedInput } from './BoardWrite.styles.js'
export default function BoardWriteUI(props){

    // 자바스크립트 영역

    // HTML 영역(return 아래)
    return(
        <>
            <div>이 영역은 BoardWrite.presenter의 영역 입니다.</div>
            작성자: <K.RedInput type="text" onChange={props.onChangeWriter}/><br/>
            제목: <input type="text" onChange={props.onChangeTitle}/><br/>
            내용: <input type="text" onChange={props.onChangeContents }/><br/>
            <K.BlueButton onClick={props.onClickSubmit}>GRAPHQL-API(동기) 요청하기</K.BlueButton>
        </>
    )
}