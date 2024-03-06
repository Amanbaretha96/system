import { useState } from "react"
import Childpage from "../pages/childpage";

const Grandfathercomponent = (props) => {
    const [file,setFile] = useState("nile")
    const {data,setData} = props
    return(
        <div>
             {file}
             <Childpage data = {data} setData = {setData} file = {file} setFile = {setFile} />
        </div>
    )
}
export default Grandfathercomponent;