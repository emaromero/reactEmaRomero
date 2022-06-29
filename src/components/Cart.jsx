import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'

const Cart = () => {
	const { cart, emptyCart, getItemPrice, deleteItem, getItemQty } = useContext(CartContext)

	const purchaseAlert = () => {
		Swal.fire({
			position: "top-center",
			icon: "success",
			iconColor: "#00A300",
			title: `Tu compra de ${getItemQty()} productos ha sido finalizada`,
			showConfirmButton: false,
			timer: 1000,
		});
	}

	const emptyCartAlert = () => {
		Swal.fire({
			toast: true,
			position: "top-end",
			icon: "success",
			iconColor: "#374151",
			title: "Carrito vacío",
			showConfirmButton: false,
			timer: 1000,
			showClass: {
				popup: 'animate__animated animate__fadeInUp'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutDown'
			}
		});
	}

	

	return (
		<>
			<section className='container'>
				<h2 className='text-center py-5'>Carrito de compras</h2>
				{cart.length > 0 &&
					<div className='text-center d-flex justify-content-center align-items-center'>
						<div className='row container justify-content-center align-items-center'>
							<div className='col-2'></div>
							<div className='col-4 text-center text-uppercase'>
								<p className='h6'>productos</p>
							</div>
							<div className='col-2 text-center text-uppercase'>
								<p className='h6'>cantidad</p>
							</div>
							<div className='col-2 text-center text-uppercase'>
								<p className='h6'>precio</p>
							</div>
							<div className='col-2 text-center text-uppercase'>
								<p className='h6'>total</p>
							</div>
						</div>
					</div>
				}
				{cart.map((e, index) => (
					<>
						<div key={index} className='text-center d-flex justify-content-center align-items-center py-3 item-cart'>
							<div className='row container justify-content-center align-items-center cart-container'>
								<div className='col-6 d-flex'>
									<div className='row d-flex'>
										<div className='col-4 cart-img-container'>
											<img src={e.img} className='cart-img'></img>
										</div>
										<div className='col-8 d-flex flex-column align-items-center justify-content-center'>
											<p className='text-center cart-title'>{e.name}</p>
											<p className='delete-btn' onClick={() => deleteItem(e.id)}><i class="fa fa-trash fa-sm"></i> Eliminar producto</p>
										</div>
									</div>
								</div>
								<div className='col-2'>
									<p className='text-center fw-bold'>{e.qty}</p>
								</div>
								<div className='col-2'>
									<p className='text-center fw-bold'>${e.price}</p>
								</div>
								<div className='col-2'>
									<p className='text-center fw-bold'>${e.qty * e.price}</p>
								</div>
							</div>

						</div>
					</>
				))}
			</section>

			{cart.length > 0 ?
				<div className='text-center py-5'>
					<button className='btn btn-secondary btn-sm mx-2' onClick={() => {
						emptyCart()
						emptyCartAlert()
					}}>Vaciar carrito</button>
					<button className='btn btn-secondary btn-sm mx-2' onClick={() => {
						purchaseAlert()
						emptyCart()
					}}>Finalizar compra</button>
					<p className='text-center'>PRECIO TOTAL ${getItemPrice()}</p>
				</div> :
				<div className='text-center'>
					<p>NO HAY PRODUCTOS</p>
					<Link to={'/'}><button className='btn btn-secondary btn-sm'>Volver a la tienda</button></Link>
				</div>
			}
		</>
	)
}

export default Cart