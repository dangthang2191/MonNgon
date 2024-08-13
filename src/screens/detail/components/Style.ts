import { StyleSheet } from "react-native"
import { COLORS, FONTSIZE, SIZES } from "../../../constant/constant"

export const style = StyleSheet.create({
    headerFood: {
        height: 300
    },
    headerAsolute: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: SIZES.paddingSmall,
        justifyContent: 'space-between'
    },
    icon: {
        height: 32,
        width: 32,
        tintColor: COLORS.primary
    },
    headerBack: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.grayDark,
        opacity: .9,
        borderRadius: 20,
        alignItems: 'center',
        height: 80,
        bottom: 0,
        left: 0
    },
    footerAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 20
    },
    footerTitle: {
        color: COLORS.gray
    },
    footerSubTitle: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
    footerTextWrapper: {
        flex: 1,
        marginLeft: SIZES.marginSmall
    },
    footerIcon: {
        width: 42,
        height: 42,
        tintColor: COLORS.primary,
        marginRight: SIZES.marginSmall

    },
    fContainer: {
        padding: SIZES.paddingSmall,
    },
    userWrapper: {
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.marginSmall
    },
    fTitleText: {
        flex: 1,
        fontWeight: '500',
        fontSize: FONTSIZE.fontMedium,
    },
    avatarLeft: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: -20
    },
    subTitle: {
        color: COLORS.grayDark,
        alignSelf: 'flex-end'
    },
    textAlignRight: {
        textAlign: 'right'
    },
    bIngredientsText: {
        fontWeight: '700',
        marginTop: SIZES.marginSmall
    },
    bIngredientsItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.marginSmall
    },
})