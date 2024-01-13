import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addItem(state, action) {
            // Поиск идентичных входящих item
            const findItem = state.items.find(obj => (
                obj.id === action.payload.id
                && obj.size === action.payload.size
                && obj.type === action.payload.type)
            )

            // Изменение счетчика при дублировании
            if (findItem) {
                findItem.count++
            } else state.items.push({...action.payload, count: 1})

            state.totalPrice = state.items.reduce((acc, obj) => {
                return acc + obj.price * obj.count
            }, 0)
        },

        minusItem(state, action) {
            const findItem = state.items.find(obj => (
                obj.id === action.payload.id
                && obj.size === action.payload.size
                && obj.type === action.payload.type
            ))

            if (findItem) {
                findItem.count--
            }

            state.totalPrice = state.items.reduce((acc, obj) => {
                return acc + obj.price * obj.count
            }, 0)
        },

        removeItem(state, action) {
            const findItem = state.items.find(obj => (
                obj.id === action.payload.id
                && obj.size === action.payload.size
                && obj.type === action.payload.type
            ))

            if (findItem) {
                state.totalPrice -= findItem.price * findItem.count
                state.items = state.items.filter(obj => obj !== findItem)
            }
        },

        clearItems(state, action) {
            state.items = []
            state.totalPrice = 0
        },
    }
})

export const {
    addItem,
    removeItem,
    clearItems,
    minusItem,
} = cartSlice.actions

export default cartSlice.reducer