import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    section: {
        flexDirection: 'row',
        paddingTop: 16,
        alignItems: 'center',
    },
    titleSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 16,
        fontFamily: 'trap-semibold',
    },
    persentsPerYear: {
        marginLeft: 18,
    },
    arrow: {
        marginLeft: 12,
        marginTop: 6,
        transform: [{ rotate: '-45deg' }],
    },
});
