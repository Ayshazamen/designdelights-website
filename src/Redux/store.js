import { configureStore } from "@reduxjs/toolkit";
import { HomeSlice } from "../Reducers/homeSlice";

const store =configureStore({reducer:{HomeReducer:HomeSlice.reducer}})
export default store