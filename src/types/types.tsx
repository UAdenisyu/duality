export type CryptoCurrencyFullInfo = {
    [key: string]: {
        depositCurrency?: number;
        incomePerYear: number;
        targetPrice: number;
        completionTime: Date;
        subscriptionDate: Date;
        status?: 'Hold' | 'Sold';
        logoSvgBig: any;
        logoSvgSmall: any;
    }[];
};

export type optionDarkMode = 'dark' | 'light' | undefined | null;

export type StyleValue = { [key: string]: object } | number | false | null;
export type StyleProp = StyleValue | StyleValue[];
