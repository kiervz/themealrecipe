import React from 'react'
import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa'

import './FavoriteItem.css'

const FavoriteItem = ({meal}) => {
    const mealURL = `/meal/${meal.idMeal}`

    const onUnFavorite = () => {
        console.log("unfavorite this: ", meal);
    }
    
    return (
        <div className='card'>
            <div className='card__image'>
                <img src={meal.strMealThumb} alt={meal.strMeal} /> 
                <div className="card__favorite" onClick={onUnFavorite}>
                    <FaHeart className='icon__favorite' />
                </div>
            </div>
            <Link to={mealURL}>
                <div className='card__content'>
                    <h4 className='card__title'>
                        {meal.strMeal} <span className='badge'>{meal.strCategory}</span>
                    </h4>
                </div>
            </Link>
        </div>
    )
}

export default FavoriteItem