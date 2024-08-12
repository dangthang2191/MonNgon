import { StyleProp, Text, TouchableOpacity, ViewStyle } from "react-native";
import { style } from "./Style";

type Props = {
    title: string,
    style?: ViewStyle
}

export const PrimaryButton = (props: Props) => (
    <TouchableOpacity style={[style.btnPrimary, props.style]}>
        <Text style={[style.textWhite]}>{props.title}</Text>
    </TouchableOpacity>
)

export const OutlineButton = (props: Props) => (
    <TouchableOpacity style={[style.btnOutLine, props.style]}>
        <Text style={[style.textWhite]}>{props.title}</Text>
    </TouchableOpacity>
)