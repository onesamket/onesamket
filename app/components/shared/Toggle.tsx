import { HalfMoon, SunLight } from "iconoir-react"
import React from "react"

const Toggle = () => {
    return (

        <div className="fixed bottom-3 right-3">
            <label className="swap swap-rotate">
                <input type="checkbox" className="theme-controller" value="black" />
                <SunLight className="swap-on  w-6 h-6" />
                <HalfMoon className="swap-off  w-6 h-6" />
            </label>
        </div>
    )
}

export default Toggle;