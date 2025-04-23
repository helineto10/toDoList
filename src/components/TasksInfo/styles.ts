import { StyleSheet } from "react-native";
import { fontFamily, colors } from "../../styles/theme";

export const s = StyleSheet.create({
    tasksHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20
    },
    infoContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },
    createdText: {
        fontFamily: fontFamily.bold,
        fontSize: 14,
        color: colors.blue.light
    },
    finishedText: {
        fontFamily: fontFamily.bold,
        fontSize: 14,
        color: colors.purple.light
    },
    counterContainer: {
        backgroundColor: colors.gray[400],
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 999,
        justifyContent: "center",
        alignItems: "center"
    },
    counterText: {
        color: colors.gray[100],
        fontFamily: fontFamily.bold,
        fontSize: 12
    },
})
