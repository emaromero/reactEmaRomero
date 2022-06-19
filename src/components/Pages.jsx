import { Navigate, Route, Routes } from "react-router-dom";
import { MiCuenta } from "./MiCuenta";
import Inicio from "./page/inicio/Index";
import { ProductosList } from "./page/productos/IndexP";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

export default function Pages() {
  return (
    <section>
      <Routes>
				<Route path="/" element={Inicio} />
				<Route path="/productos" element={ProductosList} />
        <Route path="/producto/:id" element={ProductosDetalles} />
        <Route path="/MiCuenta" element={MiCuenta} />
        <Route path="/*" element={<Navigate to={Inicio}/>}/>
			</Routes>
    </section>
  );
}