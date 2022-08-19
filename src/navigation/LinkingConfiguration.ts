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
              Market: 'one',
              Limit: 'two',
              Stop: 'three',
            },
          },
          Orders: {
            screens: {
              OpenOrders: 'four',
              OrderHistory: 'five',
            },
          },
          Wallets: {
            screens: {
              Mark: 'six',
            },
          },
          Profile: {
            screens: {
              Marke: 'seven',
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
