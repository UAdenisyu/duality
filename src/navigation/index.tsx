import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

import styles, {navigatorOptions} from './styles';
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


import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}>
            <RootNavigator />
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
    return (
            <BottomTab.Navigator 
                initialRouteName="Earn"
                sceneContainerStyle={{ backgroundColor: '#0e1015', paddingHorizontal: 24 }}
                screenOptions={navigatorOptions}>
                <BottomTab.Screen
                    name="Earn"
                    component={Earn}
                    options={{
                        title: 'Earn',
                        tabBarIcon: ({ color } : {color: string}) => <SvgComponentEarn color={color}/>,
                    }}
                /> 
                <BottomTab.Screen
                    name="Trade"
                    component={Trade}
                    options={{
                        title: 'Trade',
                        tabBarIcon: ({ color } : {color: string}) => <SvgComponentTrade color={color}/>,
                    }}
                />
                <BottomTab.Screen
                    name="Orders"
                    component={Orders}
                    options={{
                        title: 'Orders',
                        tabBarIcon: ({ color } : {color: string}) => <SvgComponentOrders color={color}/>,
                    }}
                />
                <BottomTab.Screen
                    name="Wallets"
                    component={Wallets}
                    options={{
                        title: 'Wallets',
                        tabBarIcon: ({ color } : {color: string}) => <SvgComponentWallet color={color}/>,
                    }}
                />
                <BottomTab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        title: 'Profile',
                        tabBarIcon: ({ color } : {color: string}) => <SvgComponentProfile color={color}/>,
                    }}
                />
            </BottomTab.Navigator>
    );
}