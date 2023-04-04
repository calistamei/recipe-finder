import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    fontFamily: 'sans-serif',
    fontSize: '1.25rem'
}

export default function NavBar() {
    return (
        <AppBar position='fixed' sx={{backgroundColor: "#A3DA8D"}}>
            <Toolbar>
                <LocalDiningIcon sx={{fontSize:'2.5rem'}}/>
                <Box sx={{ flexGrow: 1 }} />
                <Link to='/' style={linkStyle}>
                    Recipes
                </Link>
                <Link to='/favorites' style={linkStyle}>
                    Favorites
                </Link>
                <Link to='/shopping-list' style={linkStyle}>
                    Shopping List
                </Link>
                <Box sx={{ flexGrow: 1 }} />
            </Toolbar>
        </AppBar>
  )
}
