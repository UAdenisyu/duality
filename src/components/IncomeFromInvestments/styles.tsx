import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    section: {
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'poppins-regular',
        fontSize: 14,
        lineHeight: 21,
        justifyContent: 'flex-start'
    },
    titleIcon: {
        marginLeft: 8,
        justifyContent: 'center',
    },
    sliderWrapper: {
        marginTop: 16,
        paddingTop: 16,
    },
    sliderMarker: {
        width: 100,
        alignItems: 'center',
    },
    enabledSliderMarker: {

    },


    markerItem: {
        position: 'absolute',
        color: 'white',
    },
    markerTitle: {
        fontFamily: 'poppins-regular',
        fontSize: 12,
        lineHeight: 18,
        alignSelf: 'center',
        bottom: 80,
    },
    markerValue: {
        fontFamily: 'poppins-bold',
        fontSize: 14,
        lineHeight: 16,
        bottom: 60,
    },
    markerArrow: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 4.5,
        borderBottomWidth: 7,
        borderLeftWidth: 4.5,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#E2FF9D',
        borderLeftColor: 'transparent',
        transform: [{ rotate: '180deg'}],
        bottom: 50,
    },
    markerBottomTitle: {
        top: 50,
        fontFamily: 'poppins-regular',
        fontSize: 12,
        lineHeight: 18,
        color: '#989898',
    },
    markerBottomIcon: {
        top: 75,
    },


    incomeInfo: {
        marginTop: 16,
    },
    textInfo: {
        fontFamily: 'poppins-regular',
        fontSize: 10,
        lineHeight: 15,
        marginHorizontal: 16,
        flex: 1,
    },
    xIcon: {
        justifyContent: 'center',
    },
});