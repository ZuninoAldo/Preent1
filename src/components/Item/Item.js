import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ id, title, image, price, stock}) => {

    return(
        <article className="cardItem">
            <header className="headerItem">
                <h2 className="itemHeader">
                    {title}
                </h2>
            </header>
            <div className="itemImgContainer">
                <img src={image} alt={title} className="itemImg"/>
            </div>
            <section className="serctionItem">
                <p className="infoItem">
                    Precio: ${price}
                </p>
                <p className="infoItem">
                    tenemos en Stock: {stock}
                </p>
            </section>
            <footer className="itemFooter">
                <Link to={`/item/${id}`} className="option">Ver Detalles</Link>
            </footer>
        </article>
    )

}

export default Item;