import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

import './Navigation.css'

const Navigation = () => {
    const route = useLocation()
    const totalFavorites = useSelector(state => state.meal.favorites.length)

    return (
        <div className="d-flex__space__between header">
            <h2 style={{textAlign: 'center'}}>
                <Link to='/'>The Meal Recipe</Link>
            </h2>
            { 
                route.pathname !== '/favorites' 
                && 
                <Link className="favorite" to='/favorites'>
                    <FaHeart />
                    <span className='count__total'>{totalFavorites}</span>
                </Link>
            }
        </div>
    )
}

export default Navigation