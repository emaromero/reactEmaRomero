import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const ProductoItem = ({ title, image, category, price, id }) => {

  const value = useContext(CartContext);
  const addCarrito = value.addCarrito;

  return (

    <div className="producto">
      <Link to={`/producto/${id}`}>
        <div className="producto__img">
          <img src={image} alt={title} />
        </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
          <Link to={`/producto/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};
