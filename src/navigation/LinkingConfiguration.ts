/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Earn: {
            screens: {
              EarnScreen: 'earn/main',
              InputCryptocurrency: 'earn/input'
            },
          },
          Trade: {
            screens: {
              Market: 'trade/market',
              Limit: 'trade/limit',
              Stop: 'trade/stop',
            },
          },
          Orders: {
            screens: {
              OpenOrders: 'orders/main',
              OrderHistory: 'orders/history',
            },
          },
          Wallets: {
            screens: {
              Earn: 'wallets/earn',
              SpotAccount: 'wallets/spot'
            },
          },
          Profile: {
            screens: {
              LogOut: 'profile/logOut',
              PrivacyPolicy: 'profile/privacy',
              Settings: 'profile/settings',
              TermsAndConditions: 'profile/terms'
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
