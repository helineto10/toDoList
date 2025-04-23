import { StyleSheet } from "react-native"
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container: {
        height: 64,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.gray[500],
        borderWidth: 1,
        borderColor: colors.gray[400],
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        gap: 8,
        marginBottom: 8,
    },
    taskText: {
        color: colors.gray[100],
        fontFamily: fontFamily.regular,
        fontSize: 14,
        flexShrink: 1,
    },
    taskTextChecked: {
        color: colors.gray[300],
        fontFamily: fontFamily.regular,
        fontSize: 14,
        flexShrink: 1,
        textDecorationLine: "line-through"
    }
})