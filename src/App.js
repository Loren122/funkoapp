import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import CrearFunko from './components/CrearFunko';
import ListarFunkos from './components/ListarFunkos';
import CrearCategoria from './components/CrearCategoria';
import ListarCategorias from './components/ListarCategorias';
import CrearDescuento from './components/CrearDescuento';
import ListarDescuentos from './components/ListarDescuentos.jsx'
import ListarVentas from './components/ListarVentas.jsx';
import EditarFunko from './components/EditarFunko.jsx'
import DetalleCompra from './components/DetalleCompra.jsx';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crear-funko" element={<CrearFunko />} />
            <Route path="/listar-funkos" element={<ListarFunkos />} />
            <Route path="/crear-categoria" element={<CrearCategoria />} />
            <Route path="/listar-categorias" element={<ListarCategorias />} />
            <Route path="/crear-descuento" element={<CrearDescuento />} />
            <Route path="/listar-descuentos" element={<ListarDescuentos />} />
            <Route path="/listar-ventas" element={<ListarVentas />} />
            <Route path="/editar-funko/:id" element={<EditarFunko />} />
            <Route path="/listar-ventas/:id" element={<DetalleCompra />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
