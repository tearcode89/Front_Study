export default function CounterLetDocumentPage() {

    function onClickCountUp() {
        const count = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = count
    }

    function onClickCountDown() {
        const count = Number(document.getElementById("count").innerText) - 1
        document.getElementById("count").innerText = count
    }

    return (
        <>
            <div id="count">0</div>
            <button onClick={onClickCountUp}>증가버튼</button>
            <button onClick={onClickCountDown}>감소버튼</button>
        </>
    );
}