import React from 'react';
import './App.css';
import LandingPage from './pages/landing_page/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from './components/single_product/SingleProduct';
import { Provider } from 'react-redux';
import { Store } from "./redux/store/Store"
import MobileLogin from './components/mobile_login/MobileLogin';
import MobileRegister from './components/mobile_register/MobileRegister';
import Cart from './components/cart/Cart';
import Contactpage from './pages/contact_page/Contact';
import TestimonialsPage from './pages/testimonials_page/TestimonialsPage';
import AboutUs from './pages/about_us/AboutUs';
import MobileProfile from './components/mobile_profile/MobileProfile';
import WhishList from './pages/whishlist/WhishList';


function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<SingleProduct />} path="/singleProduct/:id" />
          <Route element={<MobileLogin />} path="/mobileLogin" />
          <Route element={<MobileRegister />} path="/mobileRegister" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Contactpage />} path="/contact" />
          <Route element={<TestimonialsPage />} path="/testimonials" />
          <Route element={<AboutUs />} path="/aboutus" />
          <Route element={<MobileProfile />} path="/mobileProfile" />
          <Route element={<WhishList />} path="/wishlist" />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
