import React, { useState } from 'react'

const ItemCount = ({inicial, max, onAdd}) => {  

    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if (count < max){
        setCount(count + 1)
        }else {
        alert('No podes agregar mas productos')
        }
    }
    const restar = () => {
        count > inicial ? setCount(count - 1) : alert('No podes quitar mas productos')
    }
    const reset = () => {
        setCount (inicial)
    }

    return (
        <div className='text-aling text-center'>
            <h2>{count}</h2>
            <button className="btn btn-outline-info" onClick={sumar}>+</button>
            <button className="btn btn-outline-warning" onClick={restar}>-</button>
            <button className="btn btn-outline-success" onClick={()=> {onAdd(count); reset()}}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount