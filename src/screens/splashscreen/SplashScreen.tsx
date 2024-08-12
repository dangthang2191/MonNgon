import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, TEXTS } from '../../constant/constant'
import LinearGradient from 'react-native-linear-gradient';
import { style } from './Style';
import { OutlineButton, PrimaryButton } from '../../components/CustomButton';

export default function SplashScreen() {
    return (
        <View style={style.container}>
            <Image source={IMAGES.backgroundSlashScreen} resizeMode='cover' />
            <View style={[style.absolute, style.containerContent]}>
                <Text style={style.title}>Cooking a Delicious Food Easily</Text>
                <Text style={style.subtitle}>Discover more than 1200 food recipts in your hands and cooking easily!</Text>
                <PrimaryButton style={style.mtLarge} title={TEXTS.LOGIN} />
                <OutlineButton style={style.mtSmall} title={TEXTS.LOGOUT}/>
            </View>
        </View>
    ) 
} 