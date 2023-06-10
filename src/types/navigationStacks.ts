import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the nested Earn stack parameters
export type EarnStackParamList = {
    Earn: undefined;
    EarnInput: {
        cryptoName: string;
    };
    EarnInputDetails: undefined;
};

// Define the nested Wallets stack parameters
export type WalletsStackParamList = {
    Wallets: undefined;
    WalletsEarn: undefined;
    SpotAccount: undefined;
    Balance: undefined;
};

// Define the nested Profile stack parameters
export type ProfileStackParamList = {
    Profile: undefined;
    Settings: undefined;
    TermsAndConditions: undefined;
    PrivacyPolicy: undefined;
};

export type TradeStackParamList = {
    Trade: undefined;
};

export type OrdersStackParamList = {
    Orders: undefined;
};

export type BottomTabStackParamList = {
    EarnStack: EarnStackParamList;
    WalletsStack: WalletsStackParamList;
    ProfileStack: ProfileStackParamList;
    TradeStack: TradeStackParamList;
    OrdersStack: OrdersStackParamList;
};

// Define the root stack parameters
export type RootStackParamList = {
    Root: BottomTabStackParamList;
    NotFound: undefined;
    GetStarted: undefined;
    Login: undefined;
};
// Define the navigation props for each screen
export type RootStackNavigationProp = StackNavigationProp<
    RootStackParamList &
        BottomTabStackParamList &
        EarnStackParamList &
        WalletsStackParamList &
        ProfileStackParamList &
        TradeStackParamList &
        OrdersStackParamList
>;

export type BottomTabNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Root'
>;

export type NotFoundScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'NotFound'
>;

export type GetStartedScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'GetStarted'
>;

export type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Login'
>;

export type EarnScreenNavigationProp = StackNavigationProp<
    EarnStackParamList,
    'Earn'
>;

export type EarnInputScreenNavigationProp = StackNavigationProp<
    EarnStackParamList,
    'EarnInput'
>;

export type EarnInputDetailsScreenNavigationProp = StackNavigationProp<
    EarnStackParamList,
    'EarnInputDetails'
>;

export type TradeScreenNavigationProp = StackNavigationProp<
    TradeStackParamList,
    'Trade'
>;

export type OrdersScreenNavigationProp = StackNavigationProp<
    OrdersStackParamList,
    'Orders'
>;

export type WalletsScreenNavigationProp = StackNavigationProp<
    WalletsStackParamList,
    'Wallets'
>;

export type WalletsEarnScreenNavigationProp = StackNavigationProp<
    WalletsStackParamList,
    'WalletsEarn'
>;

export type SpotAccountScreenNavigationProp = StackNavigationProp<
    WalletsStackParamList,
    'SpotAccount'
>;

export type BalanceScreenNavigationProp = StackNavigationProp<
    WalletsStackParamList,
    'Balance'
>;

export type ProfileScreenNavigationProp = StackNavigationProp<
    ProfileStackParamList,
    'Profile'
>;

export type SettingsScreenNavigationProp = StackNavigationProp<
    ProfileStackParamList,
    'Settings'
>;

export type TermsAndConditionsScreenNavigationProp = StackNavigationProp<
    ProfileStackParamList,
    'TermsAndConditions'
>;

export type PrivacyPolicyScreenNavigationProp = StackNavigationProp<
    ProfileStackParamList,
    'PrivacyPolicy'
>;

// Define the route props for each screen
export type RootScreenRouteProp = RouteProp<RootStackParamList, 'Root'>;

export type NotFoundScreenRouteProp = RouteProp<RootStackParamList, 'NotFound'>;

export type GetStartedScreenRouteProp = RouteProp<
    RootStackParamList,
    'GetStarted'
>;

export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

export type EarnScreenRouteProp = RouteProp<EarnStackParamList, 'Earn'>;

export type EarnInputScreenRouteProp = RouteProp<
    EarnStackParamList,
    'EarnInput'
>;

export type EarnInputDetailsScreenRouteProp = RouteProp<
    EarnStackParamList,
    'EarnInputDetails'
>;

export type TradeScreenRouteProp = RouteProp<TradeStackParamList, 'Trade'>;

export type OrdersScreenRouteProp = RouteProp<OrdersStackParamList, 'Orders'>;

export type WalletsScreenRouteProp = RouteProp<
    WalletsStackParamList,
    'Wallets'
>;

export type WalletsEarnScreenRouteProp = RouteProp<
    WalletsStackParamList,
    'WalletsEarn'
>;

export type SpotAccountScreenRouteProp = RouteProp<
    WalletsStackParamList,
    'SpotAccount'
>;

export type BalanceScreenRouteProp = RouteProp<
    WalletsStackParamList,
    'Balance'
>;

export type ProfileScreenRouteProp = RouteProp<
    ProfileStackParamList,
    'Profile'
>;

export type SettingsScreenRouteProp = RouteProp<
    ProfileStackParamList,
    'Settings'
>;

export type TermsAndConditionsScreenRouteProp = RouteProp<
    ProfileStackParamList,
    'TermsAndConditions'
>;

export type PrivacyPolicyScreenRouteProp = RouteProp<
    ProfileStackParamList,
    'PrivacyPolicy'
>;
