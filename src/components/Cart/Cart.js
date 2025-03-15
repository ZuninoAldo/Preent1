import './Cart.css'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import {Link} from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, total } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='carrito-vacio-container'>
                <h1>El carrito está vacío. Parece que todavía no agregaste productos!</h1>
                <Link className='chackout-vacio-button' to='/'>Volver al Inicio</Link>
            </div>
        )
    }

    return (
        <div className='carrito-lleno-container'>
            {cart.map(p => <CartItem key={p.id} item={p}/>)}
                <div className='checkout-container'>
                    <h3>Total: ${total}</h3>
                    <div className='checkout-buttons-container'>
                        <button onClick={()=> clearCart()} className='button'>Vaciar Carrito</button>
                        <Link to='/checkout' className='checkout-button'>Ir al Checkout</Link>
                    </div>
                </div>        
        </div>
    )

}

export default Cart
