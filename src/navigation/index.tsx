import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground, Platform, StyleSheet, View } from 'react-native';
import styles , { navigatorOptions} from './styles';
import NotFoundScreen from '../screens/NotFoundScreen';

import useThemeColors from '../hooks/useThemeColors';


import SvgComponentEarn from '../assets/svgs/SvgComponentEarn';
import SvgComponentTrade from '../assets/svgs/SvgComponentTrade';
import SvgComponentOrders from '../assets/svgs/SvgComponentOrders';
import SvgComponentWallet from '../assets/svgs/SvgComponentWallet';
import SvgComponentProfile from '../assets/svgs/SvgComponentProfile';

import Earn from '../screens/Earn';
import Orders from '../screens/Orders';
import Trade from '../screens/Trade';
import Wallets from '../screens/Wallets';
import Profile from '../screens/Profile';
import EarnInput from '../screens/Earn/Input';

import { RootStackParamList, RootTabParamList } from '../types';
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



const EarnStackScreens = () => {
    const EarnStack = createNativeStackNavigator();
    return (
      <EarnStack.Navigator>
            <EarnStack.Screen
                options={{ headerShown: false }}
                name=' '
                component={Earn}
            />
            <EarnStack.Screen
                options={{ headerShown: false }}
                name='Input'
                component={EarnInput}
            />
      </EarnStack.Navigator>
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
                    ...navigatorOptions,
                    tabBarActiveTintColor: themeColors.selectedItemColor,
                    tabBarInactiveTintColor: themeColors.extraLight,
                }}

                >
                <BottomTab.Screen
                    name="Earn"
                    component={EarnStackScreens}
                    options={{
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
                    component={Wallets}
                    options={{
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