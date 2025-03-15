import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetails/ItemDetails";
import { useParams } from "react-router-dom";

import {getDoc, doc} from "firebase/firestore";
import {db} from "../../config/firebase";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = ({id: response.id, ...data})
                setProduct(productAdapted)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer;