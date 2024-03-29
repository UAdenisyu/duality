import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        paddingRight: 30,
        borderRadius: 16,
    },
    text: {
        fontFamily: 'trap-medium',
        fontSize: 16,
        paddingTop: 2,
    },
    logOutText: {
        flex: 1,
        alignItems: 'center',
    },
    generalText: {
        flex: 1,
        marginLeft: 16,
    },
    logOutBackGround: {
        backgroundColor: '#37383C',
    },
    logOutIcon: {
        backgroundColor: '#202226',
    },
    arrow: {
        marginLeft: 20,
        borderRightWidth: 3,
        borderTopWidth: 3,
        height: 10,
        width: 10,
        borderRadius: 2,
        transform: [{ rotate: '45deg' }],
    },
    leftIconWrapper: {
        backgroundColor: '#35363A',
        borderRadius: 10,
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerText: {
        alignSelf: 'center',
    },
});
