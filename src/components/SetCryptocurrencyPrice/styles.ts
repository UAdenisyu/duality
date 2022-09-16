import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    block: {
        marginTop: 2,
        flexDirection: 'row',
    },
    avaibleTitle: {
        fontFamily: 'poppins-regular',
        marginTop: 8
    },
    warningText:{
        fontSize: 12,
    },
    highlightedText: {
        marginLeft: 6,
    },
    inputArea: {
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 32,
        marginVertical: 8,
    },
    availableValue:{
        fontFamily: 'poppins-semibold',
        fontSize: 16,
    },
    dot: {
        marginHorizontal: 12,
        marginVertical: 8.5,
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: '#4A4B4E',
    },
    priceLimit: {
        marginTop: 16 
    },
});