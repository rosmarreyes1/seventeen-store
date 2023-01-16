import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import NavBar from './layout/Navbar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './cartcontext/CartContext';
import Home from './pages/Home';
import Details from './pages/Details'
import Category from './pages/Category';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import Error404 from './pages/Error404';
import Footer from './layout/footer/Footer';
import Nosotros from './pages/Nosotros';
import FAQs from './pages/FAQs';
import ScrollTop from './utils/ScrollTop';


function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 500,
      duration: 1000,
      easing: 'ease',
      once: true
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <ScrollTop>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/:id' element={<Category />} />
              <Route path='/details/:id' element={<Details />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/faqs' element={<FAQs />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
            <Footer />
          </ScrollTop>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App;