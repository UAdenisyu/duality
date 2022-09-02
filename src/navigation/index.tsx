import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
// import * as NavigationBar from 'expo-navigation-bar';

import styles , { navigatorOptions} from './styles';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';


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
import { SvgUri, SvgProps } from 'react-native-svg';

import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
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
                    <RootNavigator />
                </ImageBackground>
        </NavigationContainer>
    );
}

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    const navBarIcons = [
        (color:string) => <SvgComponentEarn color={color}/>, 
        (color:string) => <SvgComponentTrade color={color}/>,
        (color:string) => <SvgComponentOrders color={color}/>,
        (color:string) => <SvgComponentWallet color={color}/>,
        (color:string) => <SvgComponentProfile color={color}/>,
    ];
    const setTabBarIcon = ({ focused, color, index } : {focused: boolean, color: string, index: number }) => (
            <View>
                {focused ? <View><View style={styles.activeTint}/><View style={styles.iconShadow}/></View> : null}
                {navBarIcons[index] ? navBarIcons[index](color) : null}
            </View>
    );
    return (
            <BottomTab.Navigator 
                initialRouteName="Earn"
                sceneContainerStyle={{ backgroundColor: 'transparent', paddingHorizontal: 24 }}
                screenOptions={navigatorOptions}
                >
                <BottomTab.Screen
                    name="Earn"
                    component={Earn}
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