import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from '../../../context/CartContext';
import Swal from "sweetalert2";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";

const CartCheck = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { cart, getItemPrice, getItemQty, emptyCart } = useContext(CartContext);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    const onSubmit = (data) => {
        const userData = {
            name: data.name,
            lastName: data.lastname,
            email: data.email,
            phone: data.phone,
        };

        const { name, lastName, email, phone } = userData;

        const order = {
            buyer: { name, lastName, email, phone },
            items: cart,
            total: getItemPrice(),
        };

        addDoc(orderCollection, order).then(({ id }) => {
            Swal.fire({
                position: "center",
                icon: "success",
                iconColor: "#00A300",
                title: `Su compra en \nGorilla Glue\n ha sido exitosa!\n Numero de ticket:\n${id}`,
                showConfirmButton: true,
            });
        });

        emptyCart();
    };

    return (
        <div className="col-12 col-xl-4 container ">
            <h2 className="text-center animate__animated animate__fadeInLeftBig text-uppercase">
                Completa con tus datos
            </h2>
            <div className="cart-container p-4 animate__animated animate__fadeInRightBig">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-1">
                        <label htmlFor="name" className="form-label">
                            <b className="h6" style={{ color: "#565656", fontSize: ".9rem" }}>
                                NOMBRE
                            </b>
                        </label>
                        <input
                            type="name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            placeholder="Ingresa tu nombre"
                            {...register("name", {
                                required: {
                                    value: true,
                                    maxLength: 20,
                                    message: "Ingrese un nombre",
                                },
                                pattern: {
                                    value:
                                        /^[\w'\-,.][^0-9_!????????/\\+=@#$%??&*(){}|~<>;:[\]]{2,}$/i,
                                    message: "Ingrese un nombre v??lido",
                                },
                            })}
                        />
                        {errors.name && (
                            <h6 style={{ color: "#e30428" }} className="pt-1">
                                {errors.name.message}
                            </h6>
                        )}
                    </div>
                    <div className="mb-1">
                        <label htmlFor="lastname" className="form-label">
                            <b className="h6" style={{ color: "#565656", fontSize: ".9rem" }}>
                                APELLIDO
                            </b>
                        </label>
                        <input
                            type="lastname"
                            className="form-control"
                            onChange={(e) => setLastName(e.target.value)}
                            id="lastname"
                            placeholder="Ingresa tu apellido"
                            {...register("lastname", {
                                required: {
                                    value: true,
                                    message: "Ingrese un apellido",
                                },
                                pattern: {
                                    value:
                                        /^[\w'\-,.][^0-9_!????????/\\+=@#$%??&*(){}|~<>;:[\]]{2,}$/i,
                                    message: "Ingrese un apellido v??lido",
                                },
                            })}
                        />
                        {errors.lastname && (
                            <h6 style={{ color: "#e30428" }} className="pt-1">
                                {errors.lastname.message}
                            </h6>
                        )}
                    </div>
                    <div className="mb-1">
                        <label htmlFor="email" className="form-label">
                            <b className="h6" style={{ color: "#565656", fontSize: ".9rem" }}>
                                EMAIL
                            </b>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Ingresa tu email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    maxLength: 20,
                                    message: "Ingrese un email",
                                },
                                pattern: {
                                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: "Ingrese un email v??lido",
                                },
                            })}
                        />
                        {errors.email && (
                            <h6 style={{ color: "#e30428" }} className="pt-1">
                                {errors.email.message}
                            </h6>
                        )}
                    </div>
                    <div className="mb-1">
                        <label htmlFor="phone" className="form-label">
                            <b className="h6" style={{ color: "#565656", fontSize: ".9rem" }}>
                                TELEFONO
                            </b>
                        </label>
                        <input
                            type="phone"
                            className="form-control"
                            onChange={(e) => setPhone(e.target.value)}
                            id="phone"
                            placeholder="Ingresa tu tel??fono"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    maxLength: 20,
                                    message: "Ingrese un tel??fono",
                                },
                                pattern: {
                                    value:
                                        /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/d,
                                    message: "Ingrese un tel??fono v??lido",
                                },
                            })}
                        />
                        {errors.phone && (
                            <h6 style={{ color: "#e30428" }} className="pt-1">
                                {errors.phone.message}
                            </h6>
                        )}
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>
                            <b>PRECIO TOTAL</b>
                        </p>
                        <p>
                            <b>${getItemPrice()}</b>
                        </p>
                    </div>
                    <button className="btn btn-secondary container mb-4" type="submit">
                        FINALIZAR PEDIDO
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CartCheck;