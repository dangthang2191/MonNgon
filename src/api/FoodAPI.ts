import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseMeal, ResponseCategory } from './Type'


export const FoodAPI = createApi({
    reducerPath: 'FoodAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.themealdb.com/api/json/v1/1/'}),
    endpoints: buider => ({
        getTrendingMeal: buider.query<ResponseMeal, void>({
            query: () => 'search.php?s=a'
        }),
        getCategory: buider.query<ResponseCategory, void>({
            query: () => 'categories.php'
        }),
        getDetailMeal: buider.query<ResponseMeal, string>({
            query: (id) => `lookup.php?i=${id}`
        })        
    })
})

export const {useGetTrendingMealQuery, useGetCategoryQuery, useGetDetailMealQuery} = FoodAPI