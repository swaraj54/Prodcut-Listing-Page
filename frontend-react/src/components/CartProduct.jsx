import React from 'react';
import {Button} from "@mui/material";
import './Product.css';
import {Link} from 'react-router-dom';


const CartProduct = (props) => {
    const { name, category,brand,price,image } = props.product;
    return (
      <div className="card">
          <img src={image} />
          <h3>Product Name : {name}</h3>
          <p>Brand : {brand}</p>
          <article>Category : <b>{category}</b> </article>
          <h2>Price : <b>Rs.{price}</b></h2>
      </div>
    )
}

export default CartProduct;