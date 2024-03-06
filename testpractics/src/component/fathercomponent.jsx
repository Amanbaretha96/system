import Childpage from "../pages/childpage";
import Grandfathercomponent from "./grandfathercomponent";

const { useState } = require("react")

const Fathercomponent = () => {
    const [data,setData] = useState("aman")
    return(
        <div>
            {data}
            <p>
             <h1> my name is </h1>
            </p>
            <Grandfathercomponent data = {data} setData ={setData} />
        </div>
    )
}
export default Fathercomponent;