// 백엔드에서 받아온 데이터라고 가정(컴포넌트 위에 만든 이유 : 컴포넌트 리랜더링이 되어도 다시 안만들어짐)
const Madrid = [
    { number: 1, name: "티보 쿠르트와"},
    { number: 2, name: "다니 카르바할"},
    { number: 3, name: "에데르 밀리탕"},
    { number: 4, name: "다비드 알라바"},
    { number: 22, name: "안토니오 뤼디거"},
    { number: 8, name: "토니 크로스"},
    { number: 10, name: "루카 모드리치"},
    { number: 12, name: "에두아르도 카마빙가"},
    { number: 20, name: "비니시우스 주니어"},
    { number: 9, name: "카림 벤제마"},
    { number: 21, name: "호드리구"},
];

export default function RealMadrid() {

    // 1. 가장 기본 예제
    const firstTeam = [<div>8 토니 크로스</div>, <div>9 카림 벤제마</div>, <div>10 루카 모드리치</div>]

    // 2. 실무 백엔드 데이터 예제 (1번과 결과 같음)
    const secondTeam = [{ number: 9, name: "카림 벤제마"},{ number: 8, name: "토니 크로스"},{ number: 10, name: "루카 모드리치"}].map(el => <div>{el.number} {el.title}</div>)

    // 3. 실무 백엔드 데이터 예제 (1번과 결과 같음)
    const thirdTeam = Madrid.map(el => <div>{el.number} {el.title}</div>)

    return(
        <>
            {Madrid.map(el => <div>{el.number}. {el.name}</div>)}
        </>
    )
}
