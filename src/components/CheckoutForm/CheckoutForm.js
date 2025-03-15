import './CheckoutForm.css';
import {useState} from 'react';

const CheckoutForm = ({onConfirm}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {name, phone, email}

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm} className='form-checkout'>
                <label>
                    Nombre:
                    <input type='text' value={name} onChange={({target}) => setName(target.value)} placeholder='Tu Nombre' required />
                </label>
                <label>
                    Teléfono:
                    <input type='text' value={phone} onChange={({target}) => setPhone(target.value)} placeholder='Tu Teléfono' required />
                </label>
                <label>
                    Email:
                    <input type='email' value={email} onChange={({target}) => setEmail(target.value)} placeholder='Tu Email' required />
                </label>
                <div className='form-checkout-button-container'>
                    <button type='submit' className='form-checkout-button'>Confirmar la compra</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;