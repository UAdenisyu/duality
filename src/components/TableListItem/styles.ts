import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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