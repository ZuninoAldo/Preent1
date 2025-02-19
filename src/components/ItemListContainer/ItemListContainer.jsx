import { useState, useEffect } from "react";
import { getProductos, getProductosByType } from "../../data";
import {ItemList} from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])

    const { typeId } = useParams()

    useEffect(() => {

        const asyncFunc = typeId ? getProductosByType : getProductos

        asyncFunc(typeId)
        .then(response => {
            setProductos(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [typeId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;