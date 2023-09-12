import '../css/hamburger.css'
const Hamburger = () => {
    return (
        <div className='w-[60px]'>
            <label for="check" className='w-full h-[60px]'>
                {console.log("Hamburger")}
                <input type="checkbox" id="check" />
                <span></span>
                <span></span>
                <span></span>
            </label>
        </div>
    )
}

export default Hamburger