import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: [],
        favorites: []
    },
    reducers: {
        getMeals(state, action) {
            state.meals = action.payload
        },
        getFavories(state, action) {
            state.favorites.push(...action.payload) 
        }
    }
})

export const mealsAction = mealsSlice.actions

export default mealsSlice