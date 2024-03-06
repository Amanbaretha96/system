import { useState } from "react"
import Sonpage from "../pages/sonpage";

const Dadcomponent = () => {
    const [aman,setAman] = useState("baretha")
    return(
        <div>
        {aman}
            <h1>hello</h1>
           <Sonpage aman = {aman} setAman = {setAman} />
        </div>
    )
}
export default Dadcomponent;