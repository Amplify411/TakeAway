import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[],
    },
    reducers: {
       addToCart : (state,action) => {
        state.cart.push(action.payload);
       },
       removeFromCart : (state,action) => {
        state.cart = state.cart.filter(item => item.id!== action.payload);
       },
    },
 });

 export const cartAction = cartSlice.actions;