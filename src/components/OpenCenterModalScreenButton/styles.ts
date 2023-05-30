import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
    },
    modalViewWrapper: {
        backgroundColor: 'rgba(18, 18, 18, 0.82)',
    },
    modalView: {
        marginHorizontal: 24,
        borderRadius: 24,
        padding: 24,
    },
    button: {
        flexDirection: 'row',
        borderRadius: 20,
        padding: 16,
        justifyContent: 'center',
    },
    showCancelButton: {
        backgroundColor: 'transparent',
        marginTop: 10,
    },
    buttonText: {
        fontFamily: 'trap-semibold',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 16,
    },
    modalTextWrapper: {
        marginBottom: 21,
    },
    modalTextContent: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
    },
    arrowIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 21,
    },
});
