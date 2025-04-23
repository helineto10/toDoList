import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./styles";
import { IconCirclePlus } from "@tabler/icons-react-native";
import { colors } from "../../styles/theme";

export function Header() {
    return (
        <View style={s.header}>
            <Image
                source={require("../../assets/Logo.png")}
            />
        </View>

    )
}