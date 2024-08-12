import { Image, Text, View } from "react-native"
import { IMAGES } from "../../../constant/constant"
import { style } from "../Style"


export const Toolbar = () => (
    <View style={style.toolBar}>
        <View>
            <Text style={style.titleToolBar}>Hello ByProgramers</Text>
            <Text style={style.subTitleToolBar}>What you wantto cook to day ?</Text>
        </View>
        <View>
            <Image style={style.avatar} source={IMAGES.avatar} />
        </View>
    </View>
)