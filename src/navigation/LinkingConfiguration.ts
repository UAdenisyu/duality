import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from 'types/navigationStacks';

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.createURL('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Earn: {
                        screens: {
                            Earn: {
                                path: 'earn',
                            },
                            EarnInput: {
                                path: 'earn/input',
                            },
                            EarnInputDetails: {
                                path: 'earn/details',
                            },
                        },
                    },
                    Trade: {
                        screens: {
                            Trade: {
                                path: 'trade',
                            },
                        },
                    },
                    Orders: {
                        screens: {
                            Orders: {
                                path: 'orders',
                            },
                        },
                    },
                    Wallets: {
                        screens: {
                            Wallets: {
                                path: 'wallets',
                            },
                            WalletsEarn: {
                                path: 'wallets/earn',
                            },
                            SpotAccount: {
                                path: 'wallets/spot-account',
                            },
                            Balance: {
                                path: 'wallets/balance',
                            },
                        },
                    },
                    Profile: {
                        screens: {
                            Profile: {
                                path: 'profile',
                            },
                            Settings: {
                                path: 'profile/settings',
                            },
                            TermsAndConditions: {
                                path: 'profile/terms',
                            },
                            PrivacyPolicy: {
                                path: 'profile/privacy',
                            },
                        },
                    },
                },
            },
            NotFound: '*',
            GetStarted: {
                path: 'get-started',
            },
            Login: {
                path: 'login',
            },
        },
    },
};

export default linking;
