import React from 'react'
import { } from 'boxicons';

export const MiCuenta = () => {
    return (
        <>
            <section className="title">
                <h1>Mi Cuenta</h1>
                <form className="formulario">
                    <h3>Registrate</h3>
                    <div className="cajaMiCuenta">
                        <div className="inputMicuenta">
                            <box-icon name='envelope'></box-icon>
                            <input type="text" placeholder="Nombre completo"></input>
                        </div>
                        <div className="inputMicuenta">
                            <box-icon name='user'></box-icon>
                            <input type="text" placeholder="Correo electronico"></input>
                        </div>
                        <div className="inputMicuenta">
                            <box-icon type='solid' name='key'></box-icon>
                            <input type="password" placeholder="Contraseña"></input>
                        </div>
                        <div>
                            <input type="submit" value="Registrate" className="boton"></input>
                            <p className="pAbajo">Al registarte, aceptas nuestas Condiciones de uso y Politica de privacidad</p>
                            <p className="pAbajo">¿Ya tenes cuenta? <a className="linkM" href="/enlaces/login.html">Iniciar Sesion</a></p>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}
