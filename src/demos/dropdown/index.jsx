import Dropdown from "../../components/dropdown";

const OPTIONS = ['Mango', 'Strawberry', 'Pasionfruit']
const DropdownDemo = ()=> {
    return(
        <div className="main-container dropdown">
            <Dropdown  options={OPTIONS}/>
            <select>
                {OPTIONS.map((value, index)=>(
                    <option value={value} key={index}>{value}</option>
                ))}
            </select>
        </div>
        
    )
}

export default DropdownDemo