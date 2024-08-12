import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ItemCategory from './ItemCategory'
import { style } from './Style'
import { useGetCategoryQuery } from '../api/FoodAPI'

export default function Category() {
    const data = useGetCategoryQuery().data?.categories ?? []
    return (
        <View style={style.cCategory}>
            <View style={style.cCategoryTitleWrapper}>
                <Text style={style.cCategoryTitle}>Category</Text>
                <Text>View All</Text>
            </View>
            {
                data.map((item, index) => <ItemCategory key={index} title={item.strCategory} decs={item.strCategoryDescription} url={item.strCategoryThumb}/>)
            }
        </View>
    )
}