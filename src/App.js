import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Recipes from './components/Recipes';
import Favorites from './components/Favorites';
import ShoppingList from './components/ShoppingList';
import { Stack } from '@mui/system';

function App() {
  return (
    <BrowserRouter>
    <Stack sx={{direction:'column'}}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Recipes/>} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/shopping-list' element={<ShoppingList />} />
        </Routes>
        </Stack>
    </BrowserRouter>
  );
}

export default App;
