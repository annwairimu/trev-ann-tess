import { NavLink } from "react-router-dom";
import './navbar.css';

const NavBar = () => {
    return (
     <div>
        <nav className="nav nav-pills nav-fill">
            <NavLink className="nav-item nav-link " to="/">Home</NavLink>
            <NavLink className="nav-item nav-link " to="/about">About</NavLink>
            <NavLink className="nav-item nav-link " to="/project">Project</NavLink>
            <NavLink className="nav-item nav-link " to="/contact">Contact</NavLink>
            
        </nav>
     </div>
    );
}
 
export default NavBar;