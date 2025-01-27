import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() { 

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href="">Celulares</a>
                </li>
                <li>
                    <a href="">Notebooks</a>
                </li>
                <li>
                    <a href="">Pc's</a>
                </li>
                <li>
                    <a href="">Consolas</a>
                </li>
            </ul>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )

}

export default NavBar;