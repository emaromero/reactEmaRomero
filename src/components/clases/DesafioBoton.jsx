import React, { useState } from 'react';

export default function DesafioBoton({ desde, hasta }) {
    const [x, setX] = useState(desde);

    return (
        <div className="jumbotron jumbotron-fluid">
    <div className="container">
    <h1 className="display-4">Bienvenido</h1>
    <p className="lead">Mi primer proyecto con React js</p>
        <div className='text-aling text-center'> Desafio Boton
            desde: {x}
            <br />
            <button type="button" className="btn btn-outline-info" onClick={() => {

                x < hasta ? setX(x + 1) : setX(x);
            }}
            >
                SUMAR
            </button>

            <button type="button" className="btn btn-outline-warning" onClick={() => {
                x > desde ? setX(x - 1) : setX(x);
            }}
            >
                RESTA
            </button>

        </div >
        </div>
</div>
    );
}
