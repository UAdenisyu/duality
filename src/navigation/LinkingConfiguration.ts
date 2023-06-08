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
                        path: 'Earn',
                        screens: {
                            EarnScreen: {
                                path: 'main',
                            },
                            InputCryptocurrency: {
                                path: 'input',
                            },
                        },
                    },
                    Trade: {
                        screens: {
                            Market: 'market',
                            Limit: 'limit',
                            Stop: 'stop',
                        },
                    },
                    Orders: {
                        screens: {
                            OpenOrders: 'main',
                            OrderHistory: 'history',
                        },
                    },
                    Wallets: {
                        path: 'Wallets',
                        screens: {
                            WalletsScreen: {
                                path: 'main',
                            },
                            Earn: {
                                path: 'earn',
                            },
                            SpotAccount: {
                                path: 'spotAccount',
                            },
                            Balance: {
                                path: 'balance',
                            },
                        },
                    },
                    Profile: {
                        screens: {
                            Profile: 'profile',
                            Settings: 'settings',
                            TermsAndConditions: 'terms',
                            PrivacyPolicy: 'privacy',
                        },
                    },
                },
            },
            NotFound: '*',
        },
    },
};

export default linking;
