import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProductosById } from "../../data";
import ItemDetails from "../ItemDetails/ItemDetails";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductosById(itemId)
            .then(response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetails {...producto} />
        </div>
    )
}

export default ItemDetailContainer;