import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './Meal.css'

const Meal = () => {
    const [meals, setMeals] = useState([])
    const [arrIngredients, setArrIngredients] = useState([])
    const params = useParams()

    const fetchMeal = () => {
        axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(({ data }) => {
                setMeals(data.meals)
            }).catch((error) => {
                console.log(error.response);
            })
    }

    useEffect(() => {
        fetchMeal()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        ingredients()
        // eslint-disable-next-line
    }, [meals]);

    const ingredients = () => {
        let arr_ingredients = [];
    
        if (meals.length > 0) {
            for(let number = 1; number <= 20; number++) {
                let mealMeasure = (meals[0][`strMeasure${number}`] || '').trim();
                let mealIngredient = (meals[0][`strIngredient${number}`] || '').trim();
                
                if (mealMeasure !== '' || mealIngredient !== '') {
                    arr_ingredients.push(mealMeasure + ' ' + mealIngredient)
                }
            }
        }

        setArrIngredients(arr_ingredients)
    }

    return (
        <>
            {
                meals.map(meal => (
                    <div className='content' key={meal.idMeal}>
                        <div className='content__title'>
                            {meal.strMeal} &nbsp;
                            <span className='badge'>{meal.strCategory}</span>
                        </div>
                        <img 
                            className='content__image full__bleed' 
                            src={meal.strMealThumb} 
                            alt={meal.strMeal} /> 
                        <div className='content__description'>
                            <div className='content__ingredients'>
                                <h3>Ingredients</h3>
                                <ul>{arrIngredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}</ul>
                            </div>
                            <div className='content__instruction'>
                                <h3>Method</h3>
                                <p>{meal.strInstructions}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Meal