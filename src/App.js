import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/Main.js';
import Favorites from './components/favorites/Favorites.js';
import Meal from './components/meals/Meal.js';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/meal/:id" element={<Meal />} />
            </Routes>
        </BrowserRouter>
    );
}
  
export default App;
