import React, { createContext, useState, useEffect} from 'react'
export const CartContext = createContext()

const MyProvider = ({ children }) => {
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cartItems')) ?? [])

	//ItemDetail - Si el producto a agregar ya está en el carrito o no (true/false)
	const isInCart = (id) => {
		return cart.some(x => x.id === id)
	}

	//ItemDetail - Se encarga de agregar el producto seleccionado al cart si sobreescribir los qeu ya se encuentran
	const addItem = (item, qty) => {
		const newItem = {
			...item,
			qty
		}
		if (isInCart(item.id)) {
			const findProduct = cart.find(x => x.id === item.id)
			const productIndex = cart.indexOf(findProduct)
			const auxArray = [...cart]
			auxArray[productIndex].qty += qty
			setCart(auxArray)
		} else {
			setCart([...cart, newItem])
		}
	}

	//Vacia el cart
	const emptyCart = () => {
		setCart([])
	}

	//Filter - Cart - Retorna array sin el prod. seleciconado (id)
	const deleteItem = (id) => {
		const updatedCart = cart.filter((element) => element.id !== id);
		setCart(updatedCart);
	}

	//Reduce - Productos en total (cartWidget)
	const getItemQty = () => {
		return cart.reduce((acc, x) => acc += x.qty, 0)
	}

	//Reduce - Cart - Precio total del carrito
	const getItemPrice = () => {
		return cart.reduce((acc, x) => acc += x.qty * x.price, 0)
	}
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cart));
	}, [cart]);

	return (
		<CartContext.Provider value={{ cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice }}>
			{children}
		</CartContext.Provider>
	)
}

export default MyProvider