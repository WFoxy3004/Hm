import { createAction, createReducer } from "@reduxjs/toolkit"
import { searchFn } from "../Assets/search"

const initialState = {
    list: [
        {
            id: 1,
            name: "TV",
            price: 3000
        },
        {
            id: 2,
            name: "PC",
            price: 4000
        },
        {
            id: 3,
            name: "Phone",
            price: 5000
        },
        {
            id: 4,
            name: "Phone 15",
            price: 6000
        }
    ],
    searchText: "",
    searchStatus: false,
    searchArr: []
}

export const updateSearch = createAction("products/updateSearch", (newText)=>({ 
    payload: newText
}))

export const startSearch = createAction("products/startSearch")


const productsReducer = createReducer(initialState, (builder)=>{
    builder.addCase(updateSearch, (state, action) => {
        state.searchText = action.payload
        if (action.payload.length === 0) { 
            state.searchStatus = false
        }
    })

    builder.addCase(startSearch, (state,action) => {
        if (state.searchText.length !== 0) {
            state.searchStatus = true
            state.searchArr = state.list.filter((item)=>{
                if (searchFn(state.searchText, item.name)){
                    return item.id
                } else {
                    return null
                }
            })
        }
    })
})

export default productsReducer

