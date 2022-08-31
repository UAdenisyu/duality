import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 8,
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        borderRadius: 24,
        flexDirection: 'column',
    },
    block: {
        flexDirection: 'row',
        paddingTop: 16,
    },
    title:{
        color: '#ffffff',
        // font-family: 'Trap';
        // font-style: normal;
        fontWeight: '600',
        fontSize: 24,
        marginLeft: 16,
        textAlignVertical: 'center',
    },
    persentsPerYearTitle: {
        color: '#FFFFFF',
        // font-family: 'Poppins';
        // font-style: normal;
        fontWeight: '400',
        fontSize: 14,
    },
    persentsPerYearValue: {
        color: '#E2FF9D',
        // font-family: 'Poppins';
        // font-style: normal;
        fontWeight: '400',
        fontSize: 14,
        marginLeft: 18,
    },
    arrow: {
        color: '#E2FF9D',
        marginLeft: 12,
        marginTop: 6,
        transform: [{ rotate: "-45deg" }],
    }
});