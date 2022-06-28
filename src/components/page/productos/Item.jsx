import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    return (
        <>
            <div className='producto'>
                <div className="PCI mb-3 mt-3 pt-1 d-flex">
                    <Link className='text-decoration-none' to={"/item/" + product.id}>
                        <div>
                        <div className="producto__img text-center">
                            <img src={product.img} alt={product.name} />
                        </div>
                    
                    <div className="producto__footer">
                        <h1>{product.name}</h1>
                        <p>{product.category}</p>
                        <p>{product.marca}</p>
                        <p className="price">${product.price} </p>
                    </div>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item
