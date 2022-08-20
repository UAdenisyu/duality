import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

import Earn from '../screens/Earn';
import Orders from '../screens/Orders';
import Trade from '../screens/Trade';
import Wallets from '../screens/Wallets';
import Profile from '../screens/Profile';

import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { View } from '../components/Themed';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
    * A root stack navigator is often used for displaying modals on top of all other content.
    * https://reactnavigation.org/docs/modal
    */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Earn"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}>
            <BottomTab.Screen
                name="Earn"
                component={Earn}
                options={{
                    title: 'Earn',
                    tabBarIcon: ({ color }) => <AntDesign name="meh" size={24} color={color} />,
                }}
            /> 
            <BottomTab.Screen
                name="Trade"
                component={Trade}
                options={{
                    title: 'Trade',
                    tabBarIcon: ({ color }) => <AntDesign name="meh" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Orders"
                component={Orders}
                options={{
                    title: 'Orders',
                    tabBarIcon: ({ color }) => <AntDesign name="meh" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Wallets"
                component={Wallets}
                options={{
                    title: 'Wallets',
                    tabBarIcon: ({ color }) => <AntDesign name="meh" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <AntDesign name="meh" size={24} color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
* You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
*/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
      return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  }
