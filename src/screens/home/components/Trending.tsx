import { FlatList, Text, View } from "react-native";
import ItemFood from "../../../components/ItemFood";
import { style } from "../Style";
import { useGetTrendingMealQuery } from "../../../api/FoodAPI";
import { useNavigation } from "@react-navigation/native";
import { PropsPush } from "../../../navigations/TypeCheck";
import { SCREENS } from "../../../constant/constant";

export const Trending = () => {
    const {data, isLoading} = useGetTrendingMealQuery();
    const navigation = useNavigation<PropsPush>();
    const onSendToDetailPage = () => {
        navigation.push(SCREENS.DETAIL)
    }
    return (
        <View style={style.ctnTrending}>
        <Text style={style.titleTrending}>Trending Recipe</Text>
        <FlatList
            horizontal
            data={data?.meals ?? []}
            renderItem={({item}) => <ItemFood onPress={onSendToDetailPage} url={item.strMealThumb} category={item.strCategory} tab={item.strArea} title={item.strMeal}/>}
        />
    </View>
    )
}
    
