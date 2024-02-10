const ButtonDemo = ()=> {
    const handleClick = ()=> {
        alert("Hello future Globers!")
    }
    return (
        <div className="main-container">
            <button onClick={handleClick}>
                click me
            </button>
            <div className="button" onClick={handleClick}>
                click me
            </div>
        </div>
    )
}

export default ButtonDemo