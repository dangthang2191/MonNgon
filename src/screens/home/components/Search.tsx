import { View, Text,Image } from 'react-native'
import React from 'react'
import { InputWithIcon } from '../../../components/CustomInput'
import { style } from '../Style'
import { IMAGES } from '../../../constant/constant'

export default function Search() {
    return (
        <View style={style.search}>
            <InputWithIcon />
            <View style={style.ctnHintRecipe}>
                <Image style={style.imageRecipt} source={IMAGES.reciptBookMark} />
                <View style={{flex: 1}}>
                    <Text >You have 12 repipes that you haven't tried yet haven't tried yet</Text>
                    <Text style={style.subTitleHintLink}>See Recpipes</Text>
                </View>
            </View>
        </View>
        
    )
}