import "./ItemDetails.css";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetails = ({ id, img, title, description, price, stock}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {title}
                </h2>
            </header>
            <picture>
                <img src={img} alt={title} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    tenemos en Stock: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad Agregada ",quantity)}/>
            </footer>
        </article>
    )

}

export default ItemDetails;