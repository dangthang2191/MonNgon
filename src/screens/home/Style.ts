import { StyleSheet } from "react-native"
import { COLORS, FONTSIZE, SIZES } from "../../constant/constant"

export const style = StyleSheet.create({
    home:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    toolBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.marginLarge,
        paddingHorizontal: SIZES.padddingMedium
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 24
    },
    titleToolBar: {
        fontSize: FONTSIZE.fontMedium,
        color: COLORS.primary,
        fontWeight: '500'
    },
    subTitleToolBar: {
        color: COLORS.gray
    },
    search:{
        paddingHorizontal: SIZES.padddingMedium
    },
    imageRecipt: {
        width: 100,
        height: 100
    },
    ctnHintRecipe: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.greenLight,
        borderRadius: 10,
        marginTop: SIZES.marginSmall
    },
    titleHintRecipe: {
        fontWeight: 'bold',
        color: COLORS.primary
    },
    subTitleHintLink: {
        fontWeight: '700',
        color: COLORS.primary,
        marginTop: SIZES.marginSmall
    },
    ctnTrending: {
        marginHorizontal: SIZES.marginMedium,
        marginTop: SIZES.marginSmall
    },
    titleTrending:{
        fontSize: 20,
        fontWeight: '700',
        marginBottom: SIZES.marginSmall
    }
})