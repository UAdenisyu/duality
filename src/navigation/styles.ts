import { StyleSheet, StatusBar, ImageBackground, View } from 'react-native';


const styles = StyleSheet.create({
    navigationWrapper: {
        display: "flex",  
        borderRadius: 29,
        height: 73,

        backgroundColor: 'rgba(32,34,38,0.96)',

        paddingBottom: 14,
        marginBottom: 14,
        borderColor: 'black',
        position: 'absolute',
        marginHorizontal: 14,
        borderTopWidth:0,
        
    },
    activeTint: {
        height: 3,
        width: 19,
        justifyContent: 'center',
        backgroundColor: '#E2FF9D',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        marginTop: -9,
        alignSelf: 'center',
    },
    iconShadow: {
        height: 3,
        width: 19,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        marginTop: -15,
        alignSelf: 'center',
        shadowColor: '#E2FF9D',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 12,
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
        backgroundColor: 'transparent',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
    },
    headerTitleStyle: {
        color: 'white',
        fontFamily: 'trap-semibold',
        fontSize: 40,
        marginLeft: -16,
    }
} 