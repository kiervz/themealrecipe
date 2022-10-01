import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/Main';
import Favorites from './components/favorites/Favorites';
import Meal from './components/meals/Meal';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/themealrecipe" element={<Main />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/meal/:id" element={<Meal />} />
            </Routes>
        </BrowserRouter>
    );
}
  
export default App;
