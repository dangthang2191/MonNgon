import { View, Text, Image } from 'react-native'
import React from 'react'
import { ICONS, IMAGES } from '../../../constant/constant'
import { style } from './Style'
import { BlurView } from '@react-native-community/blur'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { PropsPush } from '../../../navigations/TypeCheck'

type Props = {
    url: string
}

export default function Header({url}: Props) {
    const navigation = useNavigation<PropsPush>()
    const onBlack = () => {
        navigation.pop()
    }
    return (
        <View>
            <Image resizeMode='cover' style={style.headerFood} source={{uri: url}} />
            <View style={style.headerAsolute}>
                <View style={style.headerBack}>
                    <TouchableOpacity onPress={onBlack}>
                        <Image style={[style.icon]} source={ICONS.back}/>
                    </TouchableOpacity>
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