import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICONS, IMAGES } from '../constant/constant'
import { BlurView } from '@react-native-community/blur'
import { style } from './Style'

type Props = {
    url: string,
    category: string,
    title: string,
    tab: string,
    onPress?: Function
}

export default function ItemFood(props : Props) {
    return (
        <TouchableOpacity 
            onPress={() => {
                if(props.onPress != null){
                    props.onPress()
                }
            }}
            style={style.item}>
            <Image style={[style.itemImage]} resizeMode='cover' source={{uri: props.url}}/>
            <View style={style.itemContent}>                
                <View style={style.itemBG}>
                    <Text style={[style.itemTextColor,style.itemTitle]}>{props.category}</Text>
                </View>
                <View  style={[style.itemBG, style.itemContainerTitle]}>
                    <View style={{flex: 1}}>
                        <Text style={[style.itemTextColor, style.itemTitle]}>{props.title}</Text>
                        <Text style={style.itemTextColor}>{props.tab}</Text>
                    </View>
                    <Image style={style.itemIcon} source={ICONS.bookmark} />
                </View>
            </View>
        </TouchableOpacity>
    )
}