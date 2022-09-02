import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        borderRadius: 24,
        flexDirection: 'column',
    },
    body: {
        flexDirection: 'row',
        marginTop: 2,
    },
    title:{
        color: '#767676',
        fontFamily: 'poppins-regular',
        fontSize: 14,
    },
    numbers: {
        color: '#FFFFFF',
        fontFamily: 'poppins-semibold',
        fontSize: 24,
        lineHeight: 28,
    },
    currencyName: {
        color: '#767676',
        marginLeft: 7,
        textAlignVertical: 'center',
        fontFamily: 'poppins-regular',
    }
});