import { useState } from "react";
import Monucomponent from "./monucomponent";

const Sonucomponent = () => {
    const[call ,setCall] = useState("cut")
    console.log(call)
    return(
        <div>
            {call}
            <Monucomponent call = {call} setCall = {setCall} />
        </div>
    )
}
export default Sonucomponent;
