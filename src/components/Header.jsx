import { } from 'boxicons';
import { useContext } from "react";
import RingoL from '../images/logoRingo.png';
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  
  const toogleMenu = () => {
    setMenu(!menu)
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav" style={{ textColor: 'black' }}>
          <ul className="navbar-nav">
            <div className="">
              <img src={RingoL} alt="logoRingo" width="200" />
            </div>
            <li className="nav-item text-reset"><Link to="/home" className=" a ">Inicio</Link></li>
            <li className="nav-item text-reset"><Link to="/productos" className=" a ">Productos</Link></li>
            <li className="nav-item text-reset"><Link to="/#" className=" a ">¿Quienes somos?</Link></li>
            <li className="nav-item text-reset"><Link to="/#" className=" a ">Ayuda</Link></li>
            <li className="nav-item text-reset"><Link to="/#" className=" a ">Mi cuenta</Link></li>
          </ul>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name='cart'></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};