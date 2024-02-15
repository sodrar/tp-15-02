import { useState } from "react";

export function Horloge() {
    const [time,setTime] = useState(new Date())

    setTimeout(() => {
        setTime(new Date())
    })

    return (
        <>
            <h2>Horloge</h2>
            <h3>{time.getHours()}:{time.getMinutes()}:{time.getSeconds()}:{time.getMilliseconds()}</h3>
        </>
    )
}