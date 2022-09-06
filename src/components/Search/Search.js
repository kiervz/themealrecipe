import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { mealsAction } from '../../store/meals-slice';
import axios from 'axios'
import './Search.css'

const Search = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()

    const onChangeInput = e => setSearch(e.target.value)

    const onSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            searchMeals(search);
        }
    }

    const onButtonSubmit = () => searchMeals(search)

    const searchMeals = (search) => {
        axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(({ data }) => {
                dispatch(mealsAction.getMeals(data.meals))
            }).catch((error) => {
                console.log(error.response);
            })
    }

    return (
        <div className="search">
            <input 
                type="text" 
                className="search__input" 
                placeholder="Type your text"
                value={search}
                onChange={onChangeInput}
                onKeyDown={onSearchSubmit}
            />
            <button className="search__button" onClick={onButtonSubmit}>
                <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default Search