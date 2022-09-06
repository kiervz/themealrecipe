import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector } from 'react-redux'

import MealItem from './MealItem'

import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const searchMeals = useSelector(state => state.meal.meals)
    
    const fetchMeals = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(({data}) => {
                setMeals(data.meals)
                setIsLoading(true)
            }).catch((error) => {
                console.log(error.response);
            }).finally(() => setIsLoading(true))
    }

    useEffect(() => {
        fetchMeals()
    }, [])

    useEffect(() => {
        setMeals(searchMeals)
    }, [searchMeals])
    
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