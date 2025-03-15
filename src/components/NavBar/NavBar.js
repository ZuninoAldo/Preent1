import "./NavBar.css";
import logo from "./assets/logo.png"
import "../CardWidget/CardWidget"
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="NavBar">
            <Link className="Navbar-brand" to="/"><img src={logo} alt="logo de home de marca" className="img-logo" /></Link>
            <div className="button-container">
                <div className="linkContainer">
                    <NavLink to={"/category/mouses"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Mouses</NavLink>
                    <NavLink to={"/category/teclados"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Teclados</NavLink>
                    <NavLink to={"/category/auriculares"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Auriculares</NavLink>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )

}

export default NavBar;