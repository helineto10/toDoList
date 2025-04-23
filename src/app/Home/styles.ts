import { StyleSheet } from "react-native"
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        backgroundColor: colors.gray[700],
        padding: 16
    },
    listEmptyContainer: {
        alignItems: "center",
        paddingTop: 48,
        borderTopWidth: 1,
        borderTopColor: colors.gray[400],
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