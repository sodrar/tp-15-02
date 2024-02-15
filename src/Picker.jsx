import { useState } from 'react'
import './Picker.css'

export function Picker() {

    const [red,setRed] = useState(100);
    const [green,setGreen] = useState(150);
    const [blue,setBlue] = useState(155);

    const myStyle = {
        width: 100,
        height: 100,
        backgroundColor: "rgba("+red+","+green+","+blue+",1)"
    };

    const handleRed = e => {
        setRed(e.target.value)
    }

    const handleGreen = e => {
        setGreen(e.target.value)
    }

    const handleBLue = e => {
        setBlue(e.target.value)
    }

    return (
        <div className="picker-container">
            <h2>Color picker</h2>
            <div style={myStyle} className="color-container">

            </div>
            <span>red</span>
            <input type="range" min={0} max={255} value={red} onInput={handleRed} />
            <span>green</span>
            <input type="range" min={0} max={255} value={green} onInput={handleGreen} />
            <span>blue</span>
            <input type="range" min={0} max={255} value={blue} onInput={handleBLue} />
        </div>
    )
}