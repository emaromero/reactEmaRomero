import React from 'react'
import ringoL from '../images/logoRingo.png'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase"> </h5>
                            <img src={ringoL} alt="logoRingo" width="180px" className="mr-2 mb-4" />
                            <p>Here yo columns to organiz.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-0" />
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">menu</h5>
                            <ul className="list-unstyled">
                                <li className="nav-item text-reset"><Link to="/home" className=" a ">Inicio</Link></li>
                                <li className="nav-item text-reset"><Link to="/productos" className=" a ">Productos</Link></li>
                                <li className="nav-item text-reset"><Link to="/#" className=" a ">¿Quienes somos?</Link></li>
                                <li className="nav-item text-reset"><Link to="/#" className=" a ">Ayuda</Link></li>
                                <li className="nav-item text-reset"><Link to="/" className=" a ">Mi cuenta</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase font-weight-bold">Contactanos</h5>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-home mr-3"></i>Showroom, San Fernando</li>
                                <li><i className="fas fa-envelope mr-3"></i> ringo.info@gmail.com</li>
                                <li><i className="fas fa-phone mr-3"></i> +54 9 1164473603</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Seguinos</h6>
                            <a id="iconMeta" className="btn btn-floating m-1"
                                href="#!">
                                <box-icon className="text-dark" type='logo' name='meta' size="lg"></box-icon>
                            </a>
                            <a id="iconIg" className="btn btn-floating m-1"
                                href="https://www.instagram.com/ringo.accesorios/">
                                <box-icon type='logo' name='instagram' size="lg"></box-icon>
                            </a>
                            <a id="iconWhats" className="btn btn-floating m-1"
                                href="https://wa.link/j30w24">
                                <box-icon type='logo' name='whatsapp' size="lg"></box-icon>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="text-center p-3">
                    <a className="text-reset a" href="#"> ringoaccesorios.com</a>
                    © 2022
                </div>
            </footer>
        </>
    )
}
