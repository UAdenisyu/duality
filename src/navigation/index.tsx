import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';


import { ImageBackground, Platform, StyleSheet, View, Text, Pressable, StatusBar } from 'react-native';
import styles , { mainNavigatorOptions, mainNativeNavigatorOptions, childNavigatorOptions } from './styles';
import NotFoundScreen from '../screens/NotFoundScreen';

import useThemeColors from '../hooks/useThemeColors';



import SvgComponentEarn from '../assets/svgs/SvgComponentEarn';
import SvgComponentTrade from '../assets/svgs/SvgComponentTrade';
import SvgComponentOrders from '../assets/svgs/SvgComponentOrders';
import SvgComponentWallet from '../assets/svgs/SvgComponentWallet';
import SvgComponentProfile from '../assets/svgs/SvgComponentProfile';

import EarnMain from '../screens/Earn';
import EarnInput from '../screens/Earn/Input';

import Orders from '../screens/Orders';

import Trade from '../screens/Trade';

import WalletsMain from '../screens/Wallets';
import WalletsSpotAccount from '../screens/Wallets/SpotAccount';
import WalletsBalance from '../screens/Wallets/Balance';
import WalletsEarn from '../screens/Wallets/Earn';

import Profile from '../screens/Profile';

import { RootStackParamList, RootTabParamList, EarnStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const TabStack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'transparent',
        },
      };
    return (
        <NavigationContainer
            theme={MyTheme}
            linking={LinkingConfiguration}>
                <ImageBackground
                    source={require('../assets/images/mainBackground.png')}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%' }}>
                    <RootNavigator/>
                </ImageBackground>
        </NavigationContainer>
    );
}



const EarnStackScreens = ({ navigation }: { navigation: any }) => {
    const EarnStack = createStackNavigator();
    return (
      <EarnStack.Navigator
      >
            <EarnStack.Screen
                options={{
                    ...mainNavigatorOptions,
                    headerTitle: 'Earn',
                }}
                name='Earn/main'
                component={EarnMain}
            />
            <EarnStack.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitleAlign: 'center',
                    headerTitle: 'Input',
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate('Earn/main')}>
                            <View style={styles.headerBackArrow}/>
                        </Pressable>)
                }}
                name='Earn/input'
                component={EarnInput}
            />
      </EarnStack.Navigator>
    );
}

const WalletsStackScreens = ({ navigation }: { navigation: any }) => {
    const WalletsStackScreens = createStackNavigator();
    return (
      <WalletsStackScreens.Navigator>
            <WalletsStackScreens.Screen
                options={{
                    ...mainNavigatorOptions,
                    headerTitle: 'Wallets',
                    headerLeft: () => <View/>,
                }}
                name='Wallets/main'
                component={WalletsMain}
            />
            <WalletsStackScreens.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitleAlign: 'center',
                    headerTitle: 'Spot-account',
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate('Wallets/main')}>
                            <View style={styles.headerBackArrow}/>
                        </Pressable>)
                }}
                name='Wallets/spotAccount'
                component={WalletsSpotAccount}
            />
            <WalletsStackScreens.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitleAlign: 'center',
                    headerTitle: 'Earn',
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate('Wallets/main')}>
                            <View style={styles.headerBackArrow}/>
                        </Pressable>)
                }}
                name='Wallets/earn'
                component={WalletsEarn}
            />
            <WalletsStackScreens.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitleAlign: 'center',
                    headerTitle: 'Balance',
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.navigate('Wallets/main')}>
                            <View style={styles.headerBackArrow}/>
                        </Pressable>)
                }}
                name='Wallets/balance'
                component={WalletsBalance}
            />
      </WalletsStackScreens.Navigator>
    );
}

function RootNavigator() {
    return (
        <TabStack.Navigator>
            <TabStack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <TabStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </TabStack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const themeColors = useThemeColors();

    const themeColorStyles = StyleSheet.create({
        tint: {
            backgroundColor: themeColors.selectedItemColor,
            shadowColor: themeColors.selectedItemColor,
        },
        tintShadow: {
            ...Platform.select({
                android:{
                    shadowColor: themeColors.selectedItemColor,
                }
            }),
        }
    });

    const navBarIcons = [
        (color:string) => <SvgComponentEarn color={color}/>, 
        (color:string) => <SvgComponentTrade color={color}/>,
        (color:string) => <SvgComponentOrders color={color}/>,
        (color:string) => <SvgComponentWallet color={color}/>,
        (color:string) => <SvgComponentProfile color={color}/>,
    ];
    const setTabBarIcon = ({ focused, color, index } : {focused: boolean, color: string, index: number }) => (
            <View>
                {focused ? <View><View style={[styles.activeTint, themeColorStyles.tint]}/><View style={[styles.iconShadow, themeColorStyles.tintShadow]}/></View> : null}
                {navBarIcons[index] ? navBarIcons[index](color) : null}
            </View>
    );

    return (
            <BottomTab.Navigator 
                initialRouteName="Earn"
                sceneContainerStyle={{ backgroundColor: 'transparent',}}
                screenOptions={{
                    ...mainNativeNavigatorOptions,
                    tabBarActiveTintColor: themeColors.selectedItemColor,
                    tabBarInactiveTintColor: themeColors.extraLight,
                }}

                >
                <BottomTab.Screen
                    name="Earn"
                    component={EarnStackScreens}
                    options={{
                        headerShown: false,
                        title: 'Earn',
                        tabBarIcon: (props) => setTabBarIcon({...props, index: 0}),
                    }}
                /> 
                <BottomTab.Screen
                    name="Trade"
                    component={Trade}
                    options={{
                        title: 'Trade',
                        tabBarIcon: (props) => setTabBarIcon({...props, index: 1}),
                    }}
                />
                <BottomTab.Screen
                    name="Orders"
                    component={Orders}
                    options={{
                        title: 'Orders',
                        tabBarIcon: (props) => setTabBarIcon({...props, index: 2}),
                    }}
                />
                <BottomTab.Screen
                    name="Wallets"
                    component={WalletsStackScreens}
                    options={{
                        headerShown: false,
                        title: 'Wallets',
                        tabBarIcon: (props) => setTabBarIcon({...props, index: 3}),
                    }}
                />
                <BottomTab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: 'Profile',
                        tabBarIcon: (props) => setTabBarIcon({...props, index: 4}),
                    }}
                />
            </BottomTab.Navigator>
    );
}