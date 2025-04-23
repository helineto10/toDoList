import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const s = StyleSheet.create({
    inputButton: {
        flexDirection: "row",
        top: -42,
        gap: 4
    },
    input: {
        flex: 1,
        backgroundColor: colors.gray[500],
        height: 54,
        borderRadius: 6,
        color: colors.gray[100],
        padding: 16,
    },
    button: {
        backgroundColor: colors.blue.dark,
        height: 52,
        width: 52,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    }
})