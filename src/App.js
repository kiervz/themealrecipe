import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/Main';
import Favorites from './components/favorites/Favorites';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    );
}
  
export default App;
