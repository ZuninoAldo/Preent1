import React, { useContext, useState } from 'react'
import { Timestamp, writeBatch, collection, getDocs, query, where, FieldPath, addDoc } from 'firebase/firestore'
import CheckoutForm from '../../CheckoutForm/CheckoutForm'
import {db} from '../config/firebase'
import { CartContext } from '../../context/CartContext'
import './Checkout.css'

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {

        setLoading(true);

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

        const batch = writeBatch(db)

        const outOfStock = [];

        const ids = cart.map(item=> item.id);

        const productsRef = collection(db, 'products');

        const productsAddedFromFirestore = await getDocs(query(productsRef, where(FieldPath.documentId(), 'in', ids)));

        const {docs} = productsAddedFromFirestore;

        docs.forEach((doc) => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productsAddedToCart = cart.find(item => item.id === doc.id)
            const prodQuantity = productsAddedToCart?.quantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            } else {
                outOfStock.push({id: doc.id, ...dataDoc})
            }
        })
            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db,'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()} else{
                    console.log('Nos quedamos sin stock!')
                }
            }catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        if(loading){
            return <div className='pantalla-carga'><p>Cargando tu pedido. Aguarda por favor.</p></div>
        }

        if (orderId) {
            return <div className='compra-completada'><p>Gracias por realizar tu compra con nosotros! el id de su compra es: <strong>{orderId}</strong> </p></div>
        }

        return (
            <div className='form-checkout-container'>
                <h1>Checkout</h1>
                <CheckoutForm onConfirm={createOrder}/>
            </div>
        )
    }

export default Checkout