import { StyleSheet, StatusBar, Platform } from 'react-native';

const styles = StyleSheet.create({
    navigationWrapper: {
        overflow: 'hidden',
        display: 'flex',
        borderRadius: 29,
        height: 73,
        backgroundColor: 'rgba(32,34,38,0.96)',
        paddingBottom: 14,
        marginBottom: 14,
        borderColor: 'black',
        position: 'absolute',
        marginHorizontal: 14,
        borderTopWidth: 0,
    },
    activeTint: {
        height: 3,
        width: 19,
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        marginTop: -9,
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 5.0,
    },
    iconShadow: {
        ...Platform.select({
            android: {
                elevation: 10,
                height: 3,
                width: 19,
                justifyContent: 'center',
                backgroundColor: 'transparent',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                position: 'absolute',
                marginTop: -15,
                alignSelf: 'center',
            },
            ios: {},
        }),
    },
    flex: {
        flex: 1,
    },
});

export default styles;

export const mainNativeNavigatorOptions = {
    tabBarHideOnKeyboard: true,
    tabBarStyle: styles.navigationWrapper,
    tabBarLabelStyle: { fontSize: 12 },
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
        marginLeft: 8,
    },
};

export const mainNavigatorOptions = {
    headerShown: true,
    headerStyle: {
        backgroundColor: 'transparent',
        height: StatusBar.currentHeight ? 100 + StatusBar.currentHeight : 100,
    },
    headerShadowVisible: false,
    headerTitleStyle: {
        color: 'white',
        fontFamily: 'trap-semibold',
        fontSize: 40,
        marginLeft: 12,
    },
};

export const childNavigatorOptions = {
    headerShown: true,
    headerStyle: {
        backgroundColor: 'transparent',
        height: StatusBar.currentHeight ? 100 + StatusBar.currentHeight : 100,
    },
    headerShadowVisible: false,
    headerTitleStyle: {
        color: 'white',
        fontFamily: 'trap-semibold',
        fontSize: 24,
    },
};
