import "./styles.css"
import logo from "./Java-Logo.png"
import { Link } from "react-router-dom";
// import { ReactComponent as Logo } from "./Java-Logo.svg"; para usar svg<Logo/>
function Navbar() {
    return(
        <nav className="main-navbar">
            <img src={logo} alt="Logo" height={50} />
            <Link className="logo-text" to="/">App Entrega</Link>
        </nav>
    )    
}
export default Navbar;