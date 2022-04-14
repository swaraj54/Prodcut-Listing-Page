import React, { useEffect,useState } from 'react';
import axios from 'axios';
import CartProduct from "./CartProduct.jsx";
import './Product.css';


const URL = "http://localhost:5000/addcart";

const fetchHandler = async () => {
  return await axios.get(URL).then((res)=>res.data)
}


const Cart = () => {
    const [products, setProducts] = useState();
    useEffect(()=>{
      fetchHandler().then((data)=> setProducts(data.product))
    },[]);


    return (
      <div>    
         <div className="ul">
          {products && products.map((product, i)=>(
            <div className="li" key={i}>
              <CartProduct product={product} key={i}/>
            </div>
          ))} 
        </div> 
      </div>
    )
}

export default Cart;