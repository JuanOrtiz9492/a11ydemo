import { Link } from "react-router-dom"
const Navbar = ()=> {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/button"> Button Demo</Link>
                </li>
                <li>
                    <Link to="/link"> link Demo</Link>
                </li>
                <li>
                    <Link to="/dropdown"> dropdown Demo</Link>
                </li>
                <li>
                    <Link to="/raiting"> raiting Demo</Link>
                </li>
            </ul>
        </nav>
    )    
}

export default Navbar