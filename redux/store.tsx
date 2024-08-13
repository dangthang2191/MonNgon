import { configureStore } from "@reduxjs/toolkit";
import { FoodAPI } from "../src/api/FoodAPI";
import { bookmarkSlice } from "./reducer/BookMarkReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        [FoodAPI.reducerPath] : FoodAPI.reducer,
        bookMarkReducer: bookmarkSlice.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(FoodAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDistPath = typeof store.dispatch
export const useAppDispatch: () => AppDistPath = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector