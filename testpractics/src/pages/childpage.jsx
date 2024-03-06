const Childpage = (props) => {
    const{data,setData} = props
    const{file,setFile} = props
    const Bro = () => {
        setData("hello")
        setFile("call")

    }
    return(
        <div>
            <button onClick={Bro} > click me </button>
        </div>
    )
}
export default Childpage;