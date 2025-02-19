import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navbar">
            <Link to="/">
                <h3>Nuestra Tienda</h3>
            </Link>
            <div className="Types">
                <NavLink to={"/type/mouse"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Mouses</NavLink>
                <NavLink to={"/type/teclado"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Teclados</NavLink>
                <NavLink to={"/type/auricular"} className={({ isActive }) => isActive ? "ActiveOption" : "Option"}>Auriculares</NavLink>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )

}

export default NavBar;