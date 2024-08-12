import { View, Text, Image } from 'react-native'
import React from 'react'
import { IMAGES } from '../constant/constant'
import { style } from './Style'

type PROPS = {
    url: string,
    title: string,
    decs: string
}

export default function ItemCategory({url, title, decs} : PROPS) {
    return (
        <View style={style.itemContainerCategory}>
            <Image resizeMode='contain' style={style.itemCategoryImage} source={{uri: url}} />
            <View style={style.itemContainerText}>
                <Text style={style.itemCategoryTitle}>{title}</Text>
                <Text numberOfLines={1}>{decs}</Text>
            </View>
        </View>
    )
}