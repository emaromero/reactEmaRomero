import { } from 'boxicons';
import { Link } from "react-router-dom";
import RingoL from '../images/logoRingo.png';
import CartFloat from './CartFloat';
import Categories from './Categories';

export const Header = () => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="" id="navbarNav" style={{ textColor: 'black' }}>
          <div className="header__logo" id="logo">
            <Link to="/" className="a animate__animated animate__fadeInLeftBig"><img src={RingoL} alt="logoRingo" /></Link>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item text-reset"><Link to="/" className=" a ">Inicio</Link></li>
            <li className="nav-item text-reset"><Link to="/productos" className=" a ">Productos</Link></li>
            <Categories/>
            <CartFloat/>
          </ul>
        </div>
      </nav>
    </header>
  );
};