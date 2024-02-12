import { useState } from "react"

const Dropdown = ({options}) => {
    const [selectedOption, setSelectedOption] = useState(options[0] || '')
    const [visible, setVisible] = useState(false);
    const toggleDropdown = ()=> {
        setVisible(!visible)
    }
    const handleOptionChange = (id)=> {
        const newOption = options.find((_, index) => index === id);
        setSelectedOption(newOption)
    }
    return (
        <div className="dropdown-container" onClick={toggleDropdown}>
            <div className="selected-option">
                <span>{selectedOption}</span>
                <div className="arrow"></div>
            </div>
            <ul className={`option-list ${visible? 'visible':''}`}>
                {options.length >0 && options.map((option, index)=>(
                    <li key={index} onClick={()=> handleOptionChange(index)}>{option}</li>
                ))}
            </ul>

        </div>
    )
}

export default Dropdown