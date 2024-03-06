import { useState } from "react"
import Pankajpage from "../pages/pankajpage";

const Monucomponent = (props) => {
    const[unnon,setUnnon] = useState("call")
    const {call,setCall} = props
    return(
        <div>
            {unnon}
            <Pankajpage call = {call} setCall = {setCall} unnon = {unnon} setUnnon = {setUnnon} />
        </div>
    )
}
export default Monucomponent;