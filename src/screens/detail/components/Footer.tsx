import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../../../constant/constant'
import { style } from './Style'
import { PropsRouteDetail } from '../../../navigations/TypeCheck'
import { useRoute } from '@react-navigation/native'
import { useGetDetailMealQuery } from '../../../api/FoodAPI'
import { Meal } from '../../../api/Type'

type Props = {
    meal?: Meal
}

export default function Footer({meal}: Props) {

    return (
        <ScrollView contentContainerStyle={{paddingBottom: 24}} style={style.fContainer}>
            <View style={style.userWrapper}>
                <Text style={style.fTitleText}>{meal?.strMeal}</Text>
                <Image style={style.footerAvatar} source={IMAGES.avatar}/>
                <Image style={style.avatarLeft} source={IMAGES.avatar}/>
                <Image style={style.avatarLeft} source={IMAGES.avatar}/>
                <Image style={style.avatarLeft} source={IMAGES.avatar}/>
            </View>
            <View style={style.userWrapper}>
                <Text style={style.subTitle}>{meal?.strCategory} | {meal?.strArea}</Text>
                <View>
                    <Text style={[style.subTitle, style.textAlignRight]}>4 people</Text>
                    <Text style={[style.subTitle, style.textAlignRight]}>Already try this</Text>
                </View>
            </View>
            <Text style={style.bIngredientsText}>Instruction</Text>
            <Text numberOfLines={12}>{meal?.strInstructions}</Text>
            <View>
                <Text style={style.bIngredientsText}>Ingredients</Text>
                <View style={style.bIngredientsItem}>
                    <Text>{meal?.strIngredient1}</Text>
                    <Text>{meal?.strMeasure1}</Text>
                </View>
                <View style={style.bIngredientsItem}>
                    <Text>{meal?.strIngredient2}</Text>
                    <Text>{meal?.strMeasure2}</Text>
                </View>
                <View style={style.bIngredientsItem}>
                    <Text>{meal?.strIngredient3}</Text>
                    <Text>{meal?.strMeasure3}</Text>
                </View>
                <View style={style.bIngredientsItem}>
                    <Text>{meal?.strIngredient4}</Text>
                    <Text>{meal?.strMeasure4}</Text>
                </View>
                <View style={style.bIngredientsItem}>
                    <Text>{meal?.strIngredient5}</Text>
                    <Text>{meal?.strMeasure5}</Text>
                </View>
                <View style={style.bIngredientsItem}>
                    <Text>{meal?.strIngredient6}</Text>
                    <Text>{meal?.strMeasure6}</Text>
                </View>
                <View style={style.bIngredientsItem}>
                    <Text>{meal?.strIngredient7}</Text>
                    <Text>{meal?.strMeasure7}</Text>
                </View>
            </View>
        </ScrollView>
    )
}