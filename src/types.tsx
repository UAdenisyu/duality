import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
};

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
    GetStarted: undefined;
    Login: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;

interface CryptoName {
    cryptoName: string,
};

export type EarnTabParamList = {
    EarnMain: undefined;
    EarnInput: CryptoName;
    EarnInputDetails: undefined;
}

export type RootTabParamList = {
    Earn: NavigatorScreenParams<EarnTabParamList> | undefined;
    Trade: undefined;
    Orders: undefined;
    Wallets: undefined;
    Profile: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
>;

export type CryptoCurrencyFullInfo = {
    [key: string]: { 
                    depositCurrency? : number 
                    incomePerYear: number;
                    targetPrice: number; 
                    completionTime: Date;
                    subscriptionDate: Date;
                    status?: 'Hold' | 'Sold';
                    logoSvgBig: any;
                    logoSvgSmall: any;
                } []
}

export type optionDarkMode = 'dark' | 'light' | undefined | null;

export type StyleValue = {[key: string]: Object} | number | false | null;
export type StyleProp = StyleValue | Array<StyleValue>;