import React,{useEffect,useState} from 'react';
import {useParams,useNavigate,NavLink} from 'react-router-dom';
import axios from 'axios';
import './Product.css';
import { Button} from '@mui/material';


const ProductBook = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    useEffect(()=>{
        const fetchHandler = async () => {
            await axios.get(`http://localhost:5000/products/${id}`)
            .then((res)=> res.data).then(data => setInputs(data.product))
        }
        fetchHandler()
    },[id]);
    
    const { name, category,brand,price,image } = inputs;


    const sendRequest = async () => {
        await axios.post(`http://localhost:5000/cartproducts`, {
            name:String(name),
            category:String(category),
            brand:String(brand),
            price:Number(price),
            image:String(image),
        }).then(res=> res.data);
    } 
    const handleSend = () => {
        alert("Product Successfully Booked" )
        sendRequest().then(()=> history("/cart"))
    }

  return (
    <div className="topp"> 
        <div>
            <div className="cardd">
                <img alt="img" src={image} />
            </div>
        </div>
        <div className="card2">
            <div>
                <h1>Product Description :- </h1>
                <h1>Product Name : <b>{name}</b> </h1>
                <h2>Category : <b>{category}</b> </h2>
                <h2>Price : <b>Rs.{price}</b></h2>
                
            </div>
            <div>
            <Button onClick={()=> handleSend()  } variant="outlined" style={{width:"300px", height:"60px",marginLeft:"10px", marginTop:"300px"}}>Conform here to buy..</Button>
                
            </div>
          
        </div>
    </div>
  )
}



export default ProductBook;