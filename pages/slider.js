import Slider from "rc-slider"
import { useState } from "react";
import "rc-slider/assets/index.css";


export default function App() {
    const [multiRange, setMultiRange] = useState(0);

    return (
        <div className="App">
            {multiRange}
            <Slider
                onChange={(e) => setMultiRange(e)}
                defaultValue={multiRange}
            />
        </div>
    );
}