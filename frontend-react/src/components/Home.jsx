import React from 'react';
import {Routes,Route} from "react-router-dom";
import Products from "./Products";
import Headers from "./Headers";
import Cart from "./Cart";
import Welcome from "./Welcome";
import ProductBook from './ProductBook';

const Home = () => {
  return (
    <div>
        <header>
            <Headers />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Welcome />} ></Route>
                <Route path="/products" element={<Products />} ></Route>
                <Route path="/cart" element={<Cart />} ></Route>
                <Route path="/products/:id" element={<ProductBook/>} ></Route>
                </Routes>
        </main>
    </div>
  )
}

export default Home