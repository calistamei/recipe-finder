import React, { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { Grid, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

export default function Recipes() {
    const apiKey = '17ef320eb59f42278353ce533bed09a1'

    const [search, setSearch] = useState('')
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('')

    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${query}&number=20`)
            const data = await response.json();
            console.log(data)
            setRecipes(data)
        };
        if (query !== '') {
            getRecipes();
        }
    }, [query]);

    return (
    <>
        <Box sx={{margin:'auto', padding:"200px"}}>
            <Typography variant='h4' sx={{margin:'20px'}}>
                Search Recipes
            </Typography>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Ingredients..."
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e)=>{setSearch(e.target.value)}}
                    onKeyDown={(e)=> {if (e.key === "Enter") {setQuery(search.replace(/[ ,]+/g, ","))}}} 
                />
            </Search>
        </Box>
        <Grid container spacing={5} sx={{margin:"auto"}}>
            {recipes.map(r => (
                <Grid key={r.id} item>
                    <Box sx={{width:"300px"}}>
                        <Typography>
                            {r.title}
                        </Typography>
                        <CardMedia component="img" image={r.image} sx={{width:"300px"}}></CardMedia>
                    </Box>
                </Grid>

            ))}
        </Grid>
    </>
    )
}
