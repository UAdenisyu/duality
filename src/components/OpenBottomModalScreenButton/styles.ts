import { StyleSheet, Dimensions } from 'react-native';

const PhysicalScreenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalViewWrapper: {
        backgroundColor: 'rgba(18, 18, 18, 0.82)',
    },
    modalView: {
        height: PhysicalScreenHeight/2 - 30,
        padding: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },

    modalTitle: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
        textAlign: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
        marginHorizontal: 0,
    },
    buttonText: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 21,
        marginLeft: 7,
        flex: 1,
    },
    cryptoLogo:{
    },
    titleBlock: {
        marginBottom: 24,
    },
    titlePrompt: {
        marginTop: 8,
        textAlign: 'center',
    },

    arrowIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7,
    },


    closeIcon: {
        width: '100%',
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
});