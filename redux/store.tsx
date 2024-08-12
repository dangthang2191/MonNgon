import { configureStore } from "@reduxjs/toolkit";
import { FoodAPI } from "../src/api/FoodAPI";

export const store = configureStore({
    reducer: {
        [FoodAPI.reducerPath] : FoodAPI.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(FoodAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState> 
export type AppDistPath = typeof store.dispatch