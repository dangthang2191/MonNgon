import { View, TextInput, Image } from "react-native";
import { style } from "./Style";
import { ICONS } from "../constant/constant";

export const InputWithIcon = () => (
    <View style={style.containerSearch}>
        <Image style={style.iconInput} source={ICONS.search}/>
        <TextInput style={style.searchInput} placeholder="Search Recipies"/>
    </View>
    
)