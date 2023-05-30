import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    section: {
        flexDirection: 'row',
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    markerTitleTop: {
        position: 'absolute',
        bottom: 115,
    },
    markerValue: {
        fontFamily: 'poppins-bold',
        fontSize: 14,
        lineHeight: 16,
        marginTop: 10,
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
        borderLeftColor: 'transparent',
        transform: [{ rotate: '180deg' }],
        marginTop: 4,
        marginBottom: 8,
    },
    markerTitleBottom: {
        marginTop: 8,
        marginBottom: 4,
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
    icon: {
        justifyContent: 'center',
    },
});
