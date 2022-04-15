import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Product from "./Product.jsx";
import './Product.css';
import Slider from '@mui/material/Slider';

import {AppBar,Typography, Toolbar,Tabs, Tab,Button} from '@mui/material';


const URL = "http://localhost:5000/products";

const fetchHandler = async () => {
  return await axios.get(URL).then((res)=>res.data)
}

const Products = () => {
  
  const [trail, setTrail] = useState();
    const [products, setProducts] = useState();
    const [price, setPrice] = useState();
    
    useEffect(()=>{
      fetchHandler().then((data)=> {setTrail(data.product)
        setProducts(data.product)
      })
    },[]);

    const filterItem = (cateItem,price) => {
      const updateMenu = trail.filter((curele)=> {
          return (curele.category === cateItem && curele.price <= price);
      })
      setProducts(updateMenu);
    }
  
    const valuetext = (value)  => {
     setPrice(value);
    }

    return (
      <div>
        <div className='heading2'>
          <h1>Choose Prodcuts here</h1>
          <div className="mt2">
            <Typography variant="border" sx={{fontSize:"24px", fontWeight:"bold"}} >Filter with Price </Typography>
            <Slider  aria-label="Temperature"
              defaultValue={600}
              valueLabelDisplay="auto"
            getAriaValueText={valuetext}
              marks
              min={10}
              max={600} />
            
            </div>
          <AppBar style={{backgroundColor:'gray', marginTop:"20px"}} position="sticky">
            <Toolbar>
                <Tabs className="tb" textColor="inherit"  >
                    {/* <Tab LinkComponent={NavLink} to="/products" label="Products"/>
                    <Tab LinkComponent={NavLink} to="/cart" label="Cart"/> */}
                    <Button variant="border" >Filter on Category </Button>
                    {/* onClick={() => setProducts(products) } */}
                    <Button variant="contained" onClick={()=> setProducts(trail)} >All</Button>
                    <Button variant="contained" onClick={()=> filterItem('clothing',price)} >clothing</Button>
                    <Button variant="contained" onClick={()=> filterItem('laptops',price)}  >laptops</Button>
                    <Button variant="contained" onClick={()=> filterItem('Mobiles',price)}  >Mobiles</Button>
                    <Button variant="contained" onClick={()=> filterItem('Decorations',price)}  >Decorations</Button>
                    <Button variant="contained" onClick={()=> filterItem('Cars',price)}  >Cars</Button>
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