import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HPage from './pages/HPage';
import PPage from './pages/PPage';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HPage />} />
          <Route path="/products" element={<PPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
