import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    navigationWrapper: {
        display: "flex",  
        borderRadius: 29,
        height: 73,
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        paddingBottom: 14,
        // marginBottom: StatusBar.currentHeight ? 14 + StatusBar.currentHeight : 14,
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

export default styles;

export const navigatorOptions =  {
    tabBarHideOnKeyboard: true,
    tabBarActiveTintColor: '#E2FF9D',
    tabBarInactiveTintColor: '#ffffff',
    tabBarStyle: styles.navigationWrapper,
    tabBarLabelStyle: { fontSize: 12, },
    headerStyle: {
        height: StatusBar.currentHeight ? 100 + StatusBar.currentHeight : 100,
        backgroundColor: '#0e1015',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
    },
    headerTitleStyle: {
        color: 'white',
        fontSize: 40,
        fonstWeight: '600',
    }
} 