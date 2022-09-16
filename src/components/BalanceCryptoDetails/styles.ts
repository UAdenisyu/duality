import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleLogo: {

    },
    title: {
        paddingTop: 5,
        fontFamily: 'trap-semibold',
        lineHeight: 26.4,
        marginLeft: 16,
    },
    detailsList: {
        marginTop: 24,
    },
    detailInfo: {
        justifyContent: 'space-between',
    },
    detailName: {
        fontSize: 12, 
        lineHeight: 16,
        flex: 0.4,
    },
    value: {
        textAlign: 'right',
        lineHeight: 16, 
        flex: 0.6,
    },
});