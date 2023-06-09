import { createStackNavigator } from '@react-navigation/stack';
import HeaderBackButton from 'components/HeaderBackButton/HeaderBackButton';
import WalletsMain from 'screens/Wallets';
import WalletsBalance from 'screens/Wallets/WalletsBalance';
import WalletsEarn from 'screens/Wallets/WalletsEarn';
import WalletsSpotAccount from 'screens/Wallets/WalletsSpotAccount';

import { childNavigatorOptions, mainNavigatorOptions } from '../styles';

const WalletsStackScreens = () => {
    const WalletsStackScreens = createStackNavigator();
    return (
        <WalletsStackScreens.Navigator>
            <WalletsStackScreens.Screen
                options={{
                    ...mainNavigatorOptions,
                    headerTitle: 'Wallets',
                }}
                name="Wallets/main"
                component={WalletsMain}
            />
            <WalletsStackScreens.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitleAlign: 'center',
                    headerTitle: 'Spot-account',
                    headerLeft: HeaderBackButton,
                }}
                name="Wallets/spotAccount"
                component={WalletsSpotAccount}
            />
            <WalletsStackScreens.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitleAlign: 'center',
                    headerTitle: 'Earn',
                    headerLeft: HeaderBackButton,
                }}
                name="Wallets/earn"
                component={WalletsEarn}
            />
            <WalletsStackScreens.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitleAlign: 'center',
                    headerTitle: 'Balance',
                    headerLeft: HeaderBackButton,
                }}
                name="Wallets/balance"
                component={WalletsBalance}
            />
        </WalletsStackScreens.Navigator>
    );
};

export default WalletsStackScreens;
