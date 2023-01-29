import { createStackNavigator } from '@react-navigation/stack';


import { Pressable, View } from 'react-native';
import styles, { childNavigatorOptions, mainNavigatorOptions } from '../styles';

import WalletsMain from '../../screens/Wallets';
import WalletsBalance from '../../screens/Wallets/Balance';
import WalletsEarn from '../../screens/Wallets/Earn';
import WalletsSpotAccount from '../../screens/Wallets/SpotAccount';

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

export default WalletsStackScreens;