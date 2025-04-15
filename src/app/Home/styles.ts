import { StyleSheet } from "react-native"
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    header: {
        backgroundColor: colors.black[900],
        height: 173,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        flex: 1,
        backgroundColor: colors.gray[600],
        padding: 16,
    },
    inputButton: {
        top: -42,
        flexDirection: "row",
        gap: 4,
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
    },
    tasksHeader:{
        flexDirection: "row",
        justifyContent: "space-between", 
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
    divisor: {
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[400],
        marginTop: 16
    },
    listEmptyContainer: {
        alignItems: "center",
        marginTop: 48,
    },
    listEmptyTitle: {
        fontFamily: fontFamily.bold,
        color: colors.gray[300],
        fontSize: 14,
        marginTop: 16
    },
    listEmptySubtitle: {
        fontFamily: fontFamily.regular,
        color: colors.gray[300],
        fontSize: 14
    },
})