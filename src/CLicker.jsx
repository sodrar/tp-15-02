import { useState } from "react"

export function Clicker() {

    const [count,setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h2>Clicker</h2>
            <button onClick={handleClick}>Clickez</button>
            <p>Le compteur : {count}</p>
        </>
    )
}