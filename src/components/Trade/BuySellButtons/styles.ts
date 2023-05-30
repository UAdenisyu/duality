import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 41,
    },
    btn: {
        flex: 0.45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 71,
        paddingVertical: 6,
    },
    btnBuy: {
        backgroundColor: '#67A563',
    },
    btnSell: {
        backgroundColor: '#D96354',
    },
    btnTitle: {
        fontFamily: 'poppins-medium',
        marginBottom: -6,
    },
    btnValue: {
        fontFamily: 'poppins-extrabold',
        fontSize: 18,
        lineHeight: 27,
    },
});
