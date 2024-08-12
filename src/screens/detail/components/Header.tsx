import { View, Text, Image } from 'react-native'
import React from 'react'
import { ICONS, IMAGES } from '../../../constant/constant'
import { style } from './Style'
import { BlurView } from '@react-native-community/blur'

export default function Header() {
    return (
        <View>
            <Image resizeMode='cover' style={style.headerFood} source={IMAGES.food} />
            <View style={style.headerAsolute}>
                <View style={style.headerBack}>
                    <Image style={[style.icon]} source={ICONS.back}/>
                    <Image style={[style.icon]} source={ICONS.bookmark}/>
                </View>
                <BlurView style={style.footerContainer}>
                    <Image style={style.footerAvatar} source={IMAGES.avatar}/>
                    <View style={style.footerTextWrapper}>
                        <Text style={style.footerTitle}>Recipe by:</Text>
                        <Text style={style.footerSubTitle}>Maria</Text>
                    </View>
                    <Image style={style.footerIcon} source={ICONS.arrow}/>
                </BlurView>
            </View>
        </View>
    )
}