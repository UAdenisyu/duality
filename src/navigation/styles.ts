import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    navigationWrapper: {
        display: "flex",  
        borderRadius: 29,
        height: 73,
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        paddingBottom: 14,

        // paddingTop: 14,
        marginBottom: 14,
        borderColor: 'black',
        position: 'absolute',
        marginHorizontal: 14,
        borderTopWidth:0,
        shadowColor : '#5bc4ff',
        shadowOpacity: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
        shadowRadius: 0,
        elevation: 0,
        
    },
    activeTint: {
        height: 3,
        width: 19,
        justifyContent: 'center',
        backgroundColor: '#E2FF9D',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    flex: {
        
        flex: 1,
    },
});