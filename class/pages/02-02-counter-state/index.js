import {useState} from "react";

export default function CounterStatePage() {

    const [ count , setCount ] = useState(0)

    function plusplus() {
        setCount(count + 1)
    }

    function minusminus() {
        setCount(count + -1)
    }

    return (
        <>
            <div>{count}</div>
            <button onClick = {plusplus}>증가버튼</button>
            <button onClick = {minusminus}>감소버튼</button>
        </>
    );
}