import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    sortType: {
        name: "популярности",
        sortProperty: "rating"
    },
}


const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, action) {
            console.log(action.payload)
            state.categoryId = action.payload
        },
    }
})

export const {setCategoryId} = filterSlice.actions

export default filterSlice.reducer