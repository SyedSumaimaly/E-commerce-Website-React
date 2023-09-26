import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import HPage from './pages/HPage';
import PPage from './pages/PPage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HPage />} />
          <Route path="/products" element={<PPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path='/cart' element={ <Cart/> }/>
        </Routes>
    </>
  );
}

export default App;
