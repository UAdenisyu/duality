import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {},
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    values: {
        flex: 0.45,
        alignItems: 'flex-end',
    },
    logoContainer: {
        justifyContent: 'center',
    },
    cryptoName: {
        fontFamily: 'poppins-medium',
    },
    valueCrypto: {
        textAlign: 'right',
        fontSize: 16,
        lineHeight: 18,
    },
    valueDollar: {
        textAlign: 'right',
        paddingRight: 8,
        lineHeight: 21,
    },
});
