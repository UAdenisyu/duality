import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 8,
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        borderRadius: 24,
        flexDirection: 'column',
        color: '#FFFFFF',
    },
    block: {
        marginTop: 2,
        flexDirection: 'row',
    },
    blockWithBorder :{
        paddingTop: 0,
        paddingBottom: 16,
        borderBottomColor: '#4A4B4E',
        borderBottomWidth: 1,
    },
    title:{
        color: '#767676',
        fontFamily: 'poppins-regular',
        fontSize: 14,
        textAlignVertical: 'center',
    },
    text:{
        color: '#FFFFFF',
        fontFamily: 'poppins-regular',
    },
    highlightedText: {
        color: '#E2FF9D',
        fontFamily: 'poppins-semibold',
        marginLeft: 6,
    },
    inputArea: {
        borderColor: '#4A4B4E',
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 32,
        marginVertical: 8,
        fontFamily: 'poppins-semibold',
        fontSize: 16,
        color: '#FFFFFF',
    },
    warning: {
        color: '#FF6F66',
        fontFamily: 'poppins-regular',
        fontSize: 12,
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
    }
});