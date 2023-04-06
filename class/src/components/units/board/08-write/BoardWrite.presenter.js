import * as K from './BoardWrite.styles'
import {DongsukImg} from "./BoardWrite.styles";

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
            <K.BlueButton
                firstProps='30px'
                secondProps='gold'
                thridProps = {props.mycolor}
                onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            >
                {props.isEdit ? "수정하기" : "등록하기"}
            </K.BlueButton><br/>
            <button onClick={() => props.madongsuk(true)}>동석이형 호출버튼</button>
            <button onClick={() => props.madongsuk(false)}>동석이형 귀가버튼</button>
            {props.dongsuk ? <div><DongsukImg src="/images/DongSuck.jpg"/></div> : <div></div>}
        </>
    )
}