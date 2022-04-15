import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Product from "./Product.jsx";
import './Product.css';

import {AppBar,Typography, Toolbar,Tabs, Tab,Button} from '@mui/material';


const URL = "http://localhost:5000/products";

const fetchHandler = async () => {
  return await axios.get(URL).then((res)=>res.data)
}

const Products = () => {
  
  const [trail, setTrail] = useState();
    const [products, setProducts] = useState();
    
    useEffect(()=>{
      fetchHandler().then((data)=> setTrail(data.product))
    },[]);

    const filterItem = (cateItem) => {
      const updateMenu = trail.filter((curele)=> {
          return curele.category === cateItem;
      })
      setProducts(updateMenu);
    }

    return (
      <div>
        <div className='heading2'>
          <h1>Choose Prodcuts here</h1>
          <AppBar style={{backgroundColor:'gray'}} position="sticky">
            <Toolbar>
                <Tabs className="tb" textColor="inherit"  >
                    {/* <Tab LinkComponent={NavLink} to="/products" label="Products"/>
                    <Tab LinkComponent={NavLink} to="/cart" label="Cart"/> */}
                    <Button variant="border" >Filter here </Button>
                    {/* onClick={() => setProducts(products) } */}
                    <Button variant="contained" onClick={()=> setProducts(trail)} >All</Button>
                    <Button variant="contained" onClick={()=> filterItem('clothing')} >clothing</Button>
                    <Button variant="contained" onClick={()=> filterItem('laptops')}  >laptops</Button>
                    <Button variant="contained" onClick={()=> filterItem('Mobiles')}  >Mobiles</Button>
                    <Button variant="contained" onClick={()=> filterItem('Decorations')}  >Decorations</Button>
                    <Button variant="contained" onClick={()=> filterItem('Cars')}  >Cars</Button>
                 </Tabs>
            </Toolbar> 
        </AppBar>
        </div>
        <div className="ul mt">
        {products && products.map((product, i)=>(
          <div className="li" key={i}>
            <Product product={product} key={i}/>
          </div>
        ))}
        </div>
      </div>
    )
}

export default Products;