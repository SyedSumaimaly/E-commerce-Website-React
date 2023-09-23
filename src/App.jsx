import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import HPage from './pages/HPage';
import PPage from './pages/PPage';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HPage />} />
          <Route path="/products" element={<PPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
    </>
  );
}

export default App;
