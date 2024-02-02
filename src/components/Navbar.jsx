import React, { useState } from 'react'
import { AppBar, Box,Toolbar, IconButton, Typography,Button, Drawer,Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.svg";
import '../styles/Navbar.css';



function Navbar() { 

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Typography
      color={"goldenrod"}
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, my: 2 }}
    >
      <img src={Logo} alt="logo" height={"70"} width="200" />
    </Typography>
    <Divider />
    <ul className="mobile-navigation">
      <li>
        <NavLink activeClassName="active" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </ul>
  </Box>
  );
  

    return (
        <Box sx={{ flexGrow: 1 }} >
          <AppBar position="static" sx={{ bgcolor: "goldenrod" }}> 
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2,
                  display: {sm: 'none'},
                  }}
                  onClick={handleDrawerToggle}
              >
                <MenuIcon  />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <RestaurantMenuIcon />Desi Resturent
              </Typography>
              <Box sx={{display: { xs: 'none', sm: 'block'} }} >
                <ul className="navigation-menu">
                  <li>
                    <Link to= '/'><Button color="inherit">Home</Button></Link>
                  </li>
                  <li>
                    <Link to= '/menu'><Button color="inherit">Menu</Button></Link>
                  </li>
                  <li>
                    <Link to= '/about'><Button color="inherit">About</Button></Link>
                  </li>    
                  <li>
                    <Link to= '/contacts'><Button color="inherit">Contacts</Button></Link>
                  </li>            
                </ul>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          
        </Box>
        </Box>
      );
}

export default Navbar