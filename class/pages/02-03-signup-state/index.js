import { useState } from "react";

export default function SignupStatePage() {

    const [ email, setEmail ] = useState('');
    const [ password , setPassword ] = useState('')
    const [ EmailError , setEmailError ] = useState("")

    function onChangeEmail(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onClickSignUp() {
        console.log(email);
        console.log(password);
        if(email.includes('@') === false){
            // alert('이메일 틀렸엉 ㅠ')
            // document.getElementById('Error').innerText = '이메일이 올바르지 않습니다'
            setEmailError("이메일이 형식에 맞지 않습니다.😥 @이가 누락되었습니다.")
        } else {
            // 메시지 알림 이후, Backend 컴퓨터에 있는 API(함수) 요청
            alert('로그인 성공 😎')
        }
    }

    return(
        <>
            이메일: <input type='text' onChange={onChangeEmail} />
            {/*<div id="error"></div>*/}
            <div>{EmailError}</div>
            비밀번호: <input type='password' onChange={onChangePassword} />
            <button onClick={onClickSignUp}>회원가입</button>
        </>
    )
}