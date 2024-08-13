import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SCREENS } from "../constant/constant";
import { RouteProp } from "@react-navigation/native";

//Quy định tham số màn hình
type MainStackParams = {
    HOME : undefined,
    SPLASHSCREEN : undefined
    DETAIL: {
        id: string
    }

}

export type PropsPush = NativeStackNavigationProp<MainStackParams,SCREENS.HOME>
export type PropsRouteDetail = RouteProp<MainStackParams, SCREENS.DETAIL>