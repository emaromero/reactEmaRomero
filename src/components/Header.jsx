import { } from 'boxicons';
import { Link } from "react-router-dom";
import RingoL from '../images/logoRingo.png';
import CartFloat from './CartFloat';

export const Header = () => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="" id="navbarNav" style={{ textColor: 'black' }}>
          <div className="header__logo" id="logo">
            <Link to="/" className=" a "><img src={RingoL} alt="logoRingo" /></Link>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item text-reset"><Link to="/" className=" a ">Inicio</Link></li>
            <li className="nav-item text-reset"><Link to="/productos" className=" a ">Productos</Link></li>
            <li className="nav-item text-reset"><Link to="/nosotros" className=" a ">¿Quienes somos?</Link></li>
            <li className="nav-item text-reset"><Link to="/ayuda" className=" a ">Ayuda</Link></li>
            <li className="nav-item text-reset"><Link to="/micuenta" className=" a ">Mi cuenta</Link></li>
            <CartFloat/>
          </ul>
        </div>
      </nav>
    </header>
  );
};