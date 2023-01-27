import React, { useState } from "react";

const ToggleSwitch = () => {
    const [toggle, setToggle] = useState(true);
    const [active, setActive] = useState("#6f48e2");
    const [disable, setDisable] = useState("#171719");

    const handleClick = (event, value) => {
        if (value === "Activate") {
            setToggle(true);
            setActive("#6f48e2");
            setDisable("#171719");
        } else {
            setToggle(true);
            setDisable("#6f48e2");
            setActive("#171719");
        }
    }
    return (
        <div className="flex sm:flex-row h-10 w-1/5 bg-darkgrey rounded items-center p-5">
            <button className="text-white h-7 w-1/2 text-base font-normal rounded"
                value="Activate" style={{ backgroundColor: active }}
                onClick={(e) => handleClick(e, "Activate")}>Enable</button>
            <button className="text-white h-7 w-1/2 text-base font-normal rounded"
                value="Disbale" style={{ backgroundColor: disable }}
                onClick={(e) => handleClick(e, "Disable")}>Disable</button>
        </div>
    );
}

export default ToggleSwitch;