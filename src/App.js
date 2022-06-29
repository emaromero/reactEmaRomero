import "boxicons";
import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { MiCuenta } from "./components/MiCuenta";
import ItemListContainer from "./components/page/productos/ItemListContainer";
import MyProvider from "./context/CartContext";
import ItemDetailContainer from "./components/page/productos/ItemDetailContainer";
import Cart from "./components/Cart";


function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <MyProvider>
            <Header />
            <Routes>
            <Route path="/micuenta" element={<MiCuenta />} />
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>
            <Footer />
          </MyProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
