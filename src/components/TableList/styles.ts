import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 0,
        overflow: 'hidden',
    },
    headerWrapper: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderWidth: 0.5,
        borderBottomColor: 'rgba(133, 133, 133, 0.26)',
        shadowColor: '#25272B',
        elevation: 20,
        zIndex: 2,
    },
    headerText: {
        fontFamily: 'poppins-regular',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
    },
});

export const listItem = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    income: {
        flex: 2,
    },
    price: {
        flex: 2,
    },
    date: {
        flexDirection: 'row',
        flex: 2,
    },
    arrow: {
        alignSelf: 'center',
        marginLeft: 12,
    },
});
