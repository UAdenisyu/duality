import { StyleSheet, Dimensions } from 'react-native';

const PhysicalScreenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    wrapper: {
        marginTop: 0,
    },
    section: {
        flexDirection: 'row',
    },
    detailsWrapper: {
        marginTop: 16,
    },
    detailsTitle: {
        fontSize: 12,
    },
    detailsTitle2: {
        fontSize: 12,
        marginLeft: 5,
        textDecorationLine: 'underline',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 8,
        width: PhysicalScreenWidth / 2 - 24 - 16 - 3,
    },
    buttonText: {
        fontFamily: 'trap-semibold',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        paddingHorizontal: 10,
    },

    subscribeToEarnBtn: {
        borderRadius: 16,
        marginHorizontal: 0,
    },
    arrow: {
        justifyContent: 'center',
    },

    transactionsHistory: {
        padding: 16,
        borderRadius: 16,
        borderWidth: 1.5,
        marginTop: 8,
    },

    depositAndWithdraw: {
        marginTop: 14,
        justifyContent: 'space-between',
    },

    linesPadding: {
        marginTop: 4,
    },

    withdrawBtn: {
        backgroundColor: 'rgba(100, 100, 104, 0.34)',
    },
});
