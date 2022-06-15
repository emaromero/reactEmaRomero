import React from 'react'
import { Link, BrowserRouter as Route } from 'react-router-dom';
import Portada from "../../../images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">
            <Route>
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/productos">
                    <h1>Productos</h1>
                </Link>
                <img src={Portada} alt="" />
            </Route>
        </div>
    )
}
