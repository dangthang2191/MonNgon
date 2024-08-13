import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useRoute } from '@react-navigation/native'
import { PropsRouteDetail } from '../../navigations/TypeCheck'
import { useGetDetailMealQuery } from '../../api/FoodAPI'
import { IMAGES } from '../../constant/constant'
import Toast from 'react-native-toast-message'

export default function DetailScreen() {
    const route = useRoute<PropsRouteDetail>()
    const id = route.params?.id ?? ''
    const {data , isLoading} = useGetDetailMealQuery(id)
    const meal = data?.meals[0]
    return (
        <SafeAreaView>
            <Header 
                id={meal?.idMeal ?? ""} 
                title={meal?.strArea ?? ""} 
                url={meal?.strMealThumb ?? "https://cleverads.vn/blog/wp-content/uploads/2023/10/thi-truong-healthy-food-1.jpg"}
            />
            <Footer meal={meal}/>
            <Toast />
        </SafeAreaView>
    )
}