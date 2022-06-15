import "boxicons";
import { Carrito } from "./components/Carrito";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { ProductosList } from "./components/page/productos/IndexP";
import { DataProvider } from './context/DataProvider';

function App() {

  return (
    <>
      <div className="App">
        <DataProvider>
          <Header />
          <Carrito />
          <ProductosList />
          <Footer />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
