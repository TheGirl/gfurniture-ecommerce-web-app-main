import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home, Category, ProductDetails, Cart, Checkout } from './components';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './CartContext';
import Success from './Pages/Success/Success';

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/category' element={<Category/>}></Route>
          <Route path='/productdetails/:productId' element={<ProductDetails/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/success' element={<Success/>}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
