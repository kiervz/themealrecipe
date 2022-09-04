import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux'
import { mealsAction } from '../../store/meals-slice';

import MealItem from './MealItem'

import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    
    const fetchMeals = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(({data}) => {
                dispatch(mealsAction.getMeals(data.meals))
                setMeals(data.meals)
                setIsLoading(true)
            }).catch((error) => {
                console.log(error.response);
            }).finally(() => setIsLoading(true))
    }

    useEffect(() => {
        fetchMeals()
    }, [])
    
    return (
        <div className='meals'>
            {
                !isLoading ? <h2 style={{textAlign: 'center'}}>Loading...</h2> 
                : 
                (meals?.length > 0 ? 
                    meals.map(meal => <MealItem meal={meal} key={meal.idMeal}/>) 
                    : 
                    <h2 style={{textAlign: 'center'}}>No Data Found.</h2>)
            }
        </div>
    )
}

export default Meals