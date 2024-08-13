import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useRoute } from '@react-navigation/native'
import { PropsRouteDetail } from '../../navigations/TypeCheck'
import { useGetDetailMealQuery } from '../../api/FoodAPI'
import { IMAGES } from '../../constant/constant'

export default function DetailScreen() {
    const route = useRoute<PropsRouteDetail>()
    const id = route.params?.id ?? ''
    const {data , isLoading} = useGetDetailMealQuery(id)
    const meal = data?.meals[0]
    return (
        <SafeAreaView>
            <Header url={meal?.strMealThumb ?? ""}/>
            <Footer meal={meal}/>
        </SafeAreaView>
    )
}