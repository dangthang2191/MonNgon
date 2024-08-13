import { View, Text, Image } from 'react-native'
import React from 'react'
import { ICONS, IMAGES, STORAGEKEY } from '../../../constant/constant'
import { style } from './Style'
import { BlurView } from '@react-native-community/blur'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { PropsPush } from '../../../navigations/TypeCheck'
import storage from '../../../storage/Storage'
import Toast from 'react-native-toast-message'
import { BookMarkType } from '../../../api/Type'

type Props = {
    url: string,
    title: string,
    id: string
}

export default function Header({ url, title, id }: Props) {
    const navigation = useNavigation<PropsPush>()
    const onBlack = () => {
        navigation.pop()
    }

    const onBookmark = async () => {
        const dataBookmark : BookMarkType = {
            title, url, id
        }
        try {
            // storage.remove({ key: STORAGEKEY.bookmark })
            const data:BookMarkType[] = await storage.load({ key: STORAGEKEY.bookmark })
            const filterData = data.filter(item => item.id == id)
            if(filterData.length == 0){
                const newData = [...data, dataBookmark]
                storage.save({key: STORAGEKEY.bookmark, data: newData})
            }
        } catch (error) {
            storage.save({
                key: STORAGEKEY.bookmark,
                data: [dataBookmark]
            })
        }
        // storage.load({key: STORAGEKEY.bookmark}).then(
        //     data => {
        //         console.log('ajshdjshd jahsds',data)
        //         // const newData = [...data]
        //         // newData.push({
        //         //     url, title, id
        //         // })
        //         // storage.save({
        //         //     key: STORAGEKEY.bookmark,
        //         //     data: newData
        //         // })
        //     }
        // )
    }
    return (
        <View>
            <Image resizeMode='cover' style={style.headerFood} source={{ uri: url }} />
            <View style={style.headerAsolute}>
                <View style={style.headerBack}>
                    <TouchableOpacity onPress={onBlack}>
                        <Image style={[style.icon]} source={ICONS.back} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onBookmark}>
                        <Image style={[style.icon]} source={ICONS.bookmark} />
                    </TouchableOpacity>
                </View>
                <BlurView style={style.footerContainer}>
                    <Image style={style.footerAvatar} source={IMAGES.avatar} />
                    <View style={style.footerTextWrapper}>
                        <Text style={style.footerTitle}>Recipe by:</Text>
                        <Text style={style.footerSubTitle}>Maria</Text>
                    </View>
                    <Image style={style.footerIcon} source={ICONS.arrow} />
                </BlurView>
            </View>
        </View>
    )
}