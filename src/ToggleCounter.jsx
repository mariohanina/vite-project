import { useState } from "react"

function ToggleCounter() {

    const [isHappy, setIsHappy] = useState(true);
    const changeIsHappy = () => { setIsHappy(!isHappy) };

    const [counter, setCounter] = useState(0);
    const changeSetCounter = () => { setCounter(counter + 1) };

    return (
        <div>
            <h1 onClick={changeIsHappy}>{isHappy ? "😀" : "🥲"}</h1>
            <h1 onClick={changeSetCounter}>{counter}</h1>
        </div>
    )
}

export default ToggleCounter