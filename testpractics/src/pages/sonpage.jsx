const Sonpage = (props) => {
    const{aman,setAman} = props

    const Kill = () => {
        setAman("vivek")
    }
    return(
        <div>
            <button onClick={Kill} > take a shot </button>
        </div>
    )
}
export default Sonpage;