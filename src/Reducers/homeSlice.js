import { createSlice } from "@reduxjs/toolkit";
const initialState={value:[]}
const HomeSlice=createSlice({name:'Home',initialState,reducers:{getProductdata:(state,action)=>{return{...state,value:action.payload}}}})
export {HomeSlice}