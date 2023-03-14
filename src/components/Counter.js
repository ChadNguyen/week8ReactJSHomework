import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(props.intialCount || 0)
    
    function increment(incrementor) {
        setCount(count + incrementor)
    }

    return (
        <div>
            <h2>{props.title || 'Car Dashboard' }</h2>
            Count: { count }
            <div>
            <button onClick={() => increment(1)}>Increment</button>
            {
                (count > 0) ?
                <>
                <button onClick={() => increment(-1)}>Decrement</button>
                </>
                :
                <></>
            }
            <button onClick={() => setCount(0)}>Reset Count</button> 
            </div>
        </div>

    )

}