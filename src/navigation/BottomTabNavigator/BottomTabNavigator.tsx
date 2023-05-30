import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, View } from 'react-native';

import SvgComponentEarn from '../../assets/svgs/SvgComponentEarn';
import SvgComponentOrders from '../../assets/svgs/SvgComponentOrders';
import SvgComponentProfile from '../../assets/svgs/SvgComponentProfile';
import SvgComponentTrade from '../../assets/svgs/SvgComponentTrade';
import SvgComponentWallet from '../../assets/svgs/SvgComponentWallet';
import useThemeColors from '../../hooks/useThemeColors';
import Orders from '../../screens/Orders';
import Profile from '../../screens/Profile';
import Trade from '../../screens/Trade';
import { RootTabParamList } from '../../types';
import EarnStackScreens from '../EarnStackScreens';
import WalletsStackScreens from '../WalletsStackScreens';
import styles, { mainNativeNavigatorOptions } from '../styles';

const BottomTabNavigator = () => {
    const BottomTab = createBottomTabNavigator<RootTabParamList>();

    const selectedItemColor = useThemeColors().markedTextColor.color;
    const inActiveColor = useThemeColors().plainTextColor.color;

    const themeColorStyles = StyleSheet.create({
        tint: {
            backgroundColor: selectedItemColor,
            shadowColor: selectedItemColor,
        },
        tintShadow: {
            ...Platform.select({
                android: {
                    shadowColor: selectedItemColor,
                },
            }),
        },
    });

    const navBarIcons = [
        (color: string) => <SvgComponentEarn color={color} />,
        (color: string) => <SvgComponentTrade color={color} />,
        (color: string) => <SvgComponentOrders color={color} />,
        (color: string) => <SvgComponentWallet color={color} />,
        (color: string) => <SvgComponentProfile color={color} />,
    ];
    const setTabBarIcon = ({
        focused,
        color,
        index,
    }: {
        focused: boolean;
        color: string;
        index: number;
    }) => (
        <View>
            {focused ? (
                <View>
                    <View style={[styles.activeTint, themeColorStyles.tint]} />
                    <View
                        style={[styles.iconShadow, themeColorStyles.tintShadow]}
                    />
                </View>
            ) : null}
            {navBarIcons[index] ? navBarIcons[index](color) : null}
        </View>
    );

    return (
        <BottomTab.Navigator
            initialRouteName="Earn"
            sceneContainerStyle={{ backgroundColor: 'transparent' }}
            screenOptions={{
                ...mainNativeNavigatorOptions,
                tabBarActiveTintColor: selectedItemColor,
                tabBarInactiveTintColor: inActiveColor,
            }}>
            <BottomTab.Screen
                name="Earn"
                component={EarnStackScreens}
                options={{
                    headerShown: false,
                    title: 'Earn',
                    tabBarIcon: (props) =>
                        setTabBarIcon({ ...props, index: 0 }),
                }}
            />
            <BottomTab.Screen
                name="Trade"
                component={Trade}
                options={{
                    title: 'Trade',
                    tabBarIcon: (props) =>
                        setTabBarIcon({ ...props, index: 1 }),
                }}
            />
            <BottomTab.Screen
                name="Orders"
                component={Orders}
                options={{
                    title: 'Orders',
                    tabBarIcon: (props) =>
                        setTabBarIcon({ ...props, index: 2 }),
                }}
            />
            <BottomTab.Screen
                name="Wallets"
                component={WalletsStackScreens}
                options={{
                    headerShown: false,
                    title: 'Wallets',
                    tabBarIcon: (props) =>
                        setTabBarIcon({ ...props, index: 3 }),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'Profile',
                    tabBarIcon: (props) =>
                        setTabBarIcon({ ...props, index: 4 }),
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;
