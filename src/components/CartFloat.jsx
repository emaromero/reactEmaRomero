import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function CartFloat() {
    const { getItemQty } = useContext(CartContext)

    return (
        <div className="cart" >
            <Link className="text-center" to="/cart">
                <div className=" text-center item__total">
                    <box-icon name='cart'></box-icon>
                    <span className="h6 item__total"> {getItemQty() > 0 ? getItemQty() : 0}</span>
                </div>
            </Link>
        </div>
    )
}