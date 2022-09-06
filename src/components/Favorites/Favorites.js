import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FavoriteItem from './FavoriteItem';

import './Favorites.css'
import Navigation from '../navigation/Navigation';

const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    const stateFavorites = useSelector(state => state.meal.favorites);

    useEffect(() => {
        setFavorites(stateFavorites)
    }, [stateFavorites])

    return (
        <div>
            <Navigation />
            <h2 className='favorite__title'>Favorites</h2>
            <div className='favorites'>
                {favorites.map(favorite => <FavoriteItem key={favorite.idMeal} meal={favorite} />)}
            </div>
        </div>
    )
}

export default Favorites