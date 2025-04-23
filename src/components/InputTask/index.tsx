import { IconCirclePlus } from "@tabler/icons-react-native";
import { View, TextInput, TouchableOpacity, TextInputProps, TouchableOpacityProps } from "react-native";
import { colors } from "../../styles/colors";
import { s } from "./styles";

type InputTask = TextInputProps & TouchableOpacityProps
export function InputTask({ onChangeText, value, onPress }: InputTask) {
    return (
        <View style={s.inputButton}>
            <TextInput
                style={s.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={colors.gray[300]}
                onChangeText={onChangeText}
                value={value}

            />
            <TouchableOpacity onPress={onPress} style={s.button}>
                <IconCirclePlus size={24} color={colors.gray[100]} />
            </TouchableOpacity>
        </View>
    )
}