import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio/Index";
import { ProductosList } from "./page/productos/IndexP";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

export default function Pages() {
  return (
    <section>
      <Switch>
				<Route path="/" component={Inicio} />
				<Route path="/productos" component={ProductosList} />
        <Route path="/producto/:id" component={ProductosDetalles} />
			</Switch>
    </section>
  );
}