import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {AppBar,Typography, Toolbar,Tabs, Tab,Button} from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Headers = () => {
    const [value, setValue]= useState({});
  return (
    <div>
        <AppBar position="sticky">
            <Toolbar>
                <NavLink to="/" style={{color:"white"}} >
                <Typography><LocalHospitalIcon/><Tab label="Home"/></Typography>  
                </NavLink>
                <Tabs sx={{ml:"auto"}} textColor="inherit"  indicatorColor="secondary"  >
                    <Tab LinkComponent={NavLink} to="/products" label="Products"/>
                    <Tab LinkComponent={NavLink} to="/cart" label="Cart"/>
                    {/* <Button variant="contained" >Logout</Button> */}
                 </Tabs>
            </Toolbar> 
        </AppBar>
    </div>
  )
}

export default Headers;