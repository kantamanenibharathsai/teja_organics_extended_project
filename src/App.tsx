import React from 'react';
import './App.css';
import LandingPage from './pages/landing_page/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from './components/single_product/SingleProduct';
import { Provider } from 'react-redux';
import { Store } from "./redux/store/Store"

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<SingleProduct />} path="/single-product" />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
