import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginHorizontal: 0,
        // borderBottomEndRadius: 0,
        // borderBottomStartRadius: 0,
        padding: 0,
        paddingHorizontal: 24,
    },

    itemContainer: {
        paddingVertical: 12,
    },

    section: {
        flexDirection: 'row',
    },

    titleSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    cryptoName: {
        fontFamily: 'poppins-medium',
        fontSize: 14,
        lineHeight: 21,
        flex: 1.5,
    },
    title: {
        fontSize: 12,
        lineHeight: 18,
    },

    timeDeposits: {
        justifyContent: 'flex-start',
        flex: 6,
    },

    logo: {
        flex: 1.1,
    },

    contentTitles: {
        fontSize: 12,
        lineHeight: 18,
        flex: 1,
    },
    contentValues: {
        flex: 1,
    },
});
