import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux'
import { mealsAction } from '../../store/meals-slice';

import MealItem from './MealItem'

import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    const dispatch = useDispatch()
    
    const fetchMeals = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(({data}) => {
                dispatch(mealsAction.getMeals(data.meals))
                setMeals(data.meals)
            }).catch((error) => {
                console.log(error.response);
            })
    }

    useEffect(() => {
        fetchMeals()
    }, [])
    
    return (
        <div className='meals'>
            {meals.length > 0 ? meals.map(meal => <MealItem meal={meal} key={meal.idMeal}/>) : 'No Data Found.'}
        </div>
    )
}

export default Meals