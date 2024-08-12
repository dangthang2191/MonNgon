import { StyleSheet } from "react-native"
import { COLORS, FONTSIZE, SIZES } from "../constant/constant"
import ItemCategory from "./ItemCategory"

export const style = StyleSheet.create({
    btnPrimary: {
        padding: SIZES.paddingSmall,        
        backgroundColor: COLORS.primary,
        borderRadius: 8
    },
    textWhite: {
        color: COLORS.white,
        textAlign: 'center',
        fontWeight: '700',
    },
    btnOutLine: {
        padding: SIZES.paddingSmall,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.primary
    },
    tabIconContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabIconSelected: {
        tintColor: COLORS.primary
    },
    tabIconUnSelected: {
        tintColor: COLORS.gray
    },
    tabBottomLine:{
        position: 'absolute',
        backgroundColor: COLORS.primary,
        bottom: 0,
        height: 3,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    containerSearch: {
        height: 42,
        backgroundColor: COLORS.grayLight,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.marginSmall

    },
    iconInput:{
        height: 24,
        width: 24
    },
    searchInput: {
        width: '100%',
        height: 42,
        color: COLORS.black
    },
    itemImage: {
        borderRadius: 20,
        width: 350,
        height: 500
    },
    itemContent: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        padding: SIZES.paddingSmall,
        alignItems: 'flex-start'
    },
    itemBG:{
        backgroundColor: COLORS.grayDark,
        opacity: .9,
        padding: SIZES.paddingSmall,
        borderRadius: 10
    },
    itemTextColor: {
        color: COLORS.white
    },
    itemIcon:{
        tintColor: COLORS.primary,
        margin: SIZES.marginSmall
    },
    itemContainerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '700',
    },
    item: {
        marginLeft: SIZES.marginSmall
    },
    cCategory: {
        padding: SIZES.padddingMedium
    },
    cCategoryTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cCategoryTitle: {
        fontSize: FONTSIZE.fontMedium,
        fontWeight: '700',
    },
    itemContainerCategory: {
        flexDirection: 'row',
        padding: SIZES.paddingSmall,
        backgroundColor: COLORS.grayLight,        
        borderRadius: 10,
        marginTop: SIZES.marginSmall
    },
    itemCategoryImage: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    itemContainerText: {
        marginLeft: SIZES.marginSmall,
        marginRight: SIZES.marginSmall,
        flex: 1,
        justifyContent: 'space-between'
    },
    itemCategoryTitle: {
        fontSize: FONTSIZE.fontSmallMedium,
        fontWeight: '500'
    }
})