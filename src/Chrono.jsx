import { useState } from "react";

export function Chrono() {
    const [isRunning, setIsRunning] = useState(false);
    const [t0, setTZero] = useState(0);
    const [date, setDate] = useState(new Date(0));

    function start() {
        setTZero(Date.now());
        setIsRunning(true);
    }

    setTimeout(() => {
        if (isRunning) {
            setDate(new Date(Date.now() - t0));
        }
    }, 1000)

    return (
        <div>
            <h2>Chrono</h2>
            <p>{date.getSeconds()}</p>
            <button onClick={start}>START</button>
        </div>
    )
}