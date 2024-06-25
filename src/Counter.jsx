import { useState } from "react"

function Counter() {
    const [num, setNum] = useState(0);
    const changeNum = () => {
        setNum(num + 1);
    }

    return (
        <div>
            <h2>{num}</h2>
            <button onClick={changeNum}>Counter</button>
        </div>
    )
}

export default Counter