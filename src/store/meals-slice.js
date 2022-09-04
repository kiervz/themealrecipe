import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: []
    },
    reducers: {
        getMeals(state, action) {
            state.meals = action.payload
        }
    }
})

export const mealsAction = mealsSlice.actions

export default mealsSlice