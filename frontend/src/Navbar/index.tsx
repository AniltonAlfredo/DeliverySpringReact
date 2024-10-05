import "./styles.css"
import logo from "./Java-Logo.png"
// import { ReactComponent as Logo } from "./Java-Logo.svg"; para usar svg<Logo/>
function Navbar() {
    return(
        <nav className="main-navbar">
            <img src={logo} alt="Logo" height={50} />
            <a className="logo-text" href="/">App Entrega</a>
        </nav>
    )    
}
export default Navbar;