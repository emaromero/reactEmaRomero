import React from 'react'

export default function TestEventos22() {
    function handleClick(e, id) {
        console.log(e);
        alert('click en:' + id);
    }
    return (
        <>
            <div onClick={(e) => handleClick(e, 1)} style={{ border: '1px solid red' }}>
                Producto1
            </div>
            <p> onClick={(e) => handleClick(e, 2)} style={{ border: '1px solid red' }}
                Producto2
            </p>
        </>
    );
}