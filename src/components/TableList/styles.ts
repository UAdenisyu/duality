import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 8,
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        borderRadius: 24,
        overflow: 'hidden',
        flexDirection: 'column',
    },
    headerWrapper: {
        paddingVertical: 12,
        paddingHorizontal: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderWidth: 0.5,
        borderBottomColor: 'rgba(133, 133, 133, 0.26)',
        elevation: 20,
        shadowColor: '#25272B',
        zIndex: 2,
    },
    headerText: {
        color: "#888888",
        fontWeight: '400',
        fontSize: 12,
    }
});

export const listItem = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    income: {
        justifyContent: 'flex-start',
        color: '#E2FF9D',
        fontWeight: '600',
        fontSize: 14,
    },
    price: {
        justifyContent: 'flex-start',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
    },
    date: {
        mytextColor: {
            color: '#FFFFFF',
        },
        justifyContent: 'center',
        flexDirection: 'row',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
    },
    arrow: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 12,
    }
});