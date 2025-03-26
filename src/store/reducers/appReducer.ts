import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAppState, IProduct } from "../types/appState";

const initialState:IAppState = {
    products:[
        {
            like:false,
            name:'alibek',
            text:'something alibek something alibeksomething alibeksomething alibek',
        },
        {
            like:false,
            name:'alibek2',
            text:'something alibek something alibeksomething alibeksomething alibek',
        },
        {
            like:false,
            name:'alibek3',
            text:'something alibek',
        },
    ],
    filter:'All Cards',
    searchLine:'',
}

export const appReducer = createSlice({
    name:'App',
    initialState:initialState,
    reducers:{
        addProduct(state,action:PayloadAction<IProduct>) {
            state.products.push(action.payload)
        },
        deleteProduct(state,action:PayloadAction<string>) {
            state.products = state.products.filter(product => product.name !== action.payload)
        },
        changeLikeProduct(state,action:PayloadAction<{name:string,like:boolean}>) {
            const {name,like} = action.payload
            state.products = state.products.map(product => product.name===name?{...product,like:like}:product)
        },
        changeFilter(state,action:PayloadAction<string>) {
            state.filter = action.payload
        },
        changeSearchLine(state,action:PayloadAction<string>) {
            state.searchLine = action.payload
        },
    }
})

export const { 
    addProduct,
    changeLikeProduct,
    deleteProduct,
    changeFilter,
    changeSearchLine, 
} = appReducer.actions


export default appReducer.reducer