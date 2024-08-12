import { StyleSheet } from "react-native"
import { COLORS, FONTSIZE, SIZES } from "../../constant/constant"

export const style = StyleSheet.create({
    container: {
        flex: 1,        
    },
    absolute: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    containerContent: {
        height: 400,
        bottom: 0,
        padding: SIZES.paddingLarge
    },
    title: {
        fontSize: FONTSIZE.fontLarge,
        color: COLORS.white,
        fontWeight: '700'
    },
    subtitle: {
        color: COLORS.gray,
        marginTop: SIZES.marginLarge
    },
    mtLarge: {
        marginTop: SIZES.marginLarge
    },
    mtSmall:{
        marginTop: SIZES.marginSmall
    }
})