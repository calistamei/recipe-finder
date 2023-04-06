import React from 'react'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function ShoppingList() {
  return (
    <Box sx={{margin:'auto', padding:"200px"}}>
        <Typography variant='h4' sx={{margin:'20px'}}>
            Search Recipes
        </Typography>
    </Box>
  )
}
