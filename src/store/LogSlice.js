import {createSlice} from "@reduxjs/toolkit";

const initialLogState ={ isLoggedOut:true,}

export const logSlice = createSlice({
    name: 'log',
    initialState:initialLogState,
    reducers: {
        login (state) {
            state.isLoggedOut=true;
        },
        signup (state) {
            state.isLoggedOut=true;
        },
        logout (state) {
            state.isLoggedOut=false;
        },
    },
 });

 export const logAction = logSlice.actions;