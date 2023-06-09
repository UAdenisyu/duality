import EthLogoBig from 'assets/svgs/EthLogo.svg';
import EthLogoSmall from 'assets/svgs/EthLogoSmall.svg';
import UsdtLogoBig from 'assets/svgs/UsdtLogo.svg';
import UsdtLogoSmall from 'assets/svgs/UsdtLogoSmall.svg';
import { CryptoCurrencyFullInfo } from 'types/types';

interface DualityStore {
    appTheme: 'dark' | 'light';
    setAppTheme: (value: 'dark' | 'light') => void;
    totalBalance: number;
    setTotalBalance: (value: number) => void;
    cryptoCurrencyFullInfo: CryptoCurrencyFullInfo;
}

export function createDualityStore() {
    const data: DualityStore = {
        appTheme: 'light',
        setAppTheme(value) {
            this.appTheme = value;
        },
        totalBalance: 23000,
        setTotalBalance(value: number) {
            this.totalBalance = value;
        },
        cryptoCurrencyFullInfo: {
            Eth: [
                {
                    depositCurrency: 0.004,
                    incomePerYear: 2.38,
                    targetPrice: 120,
                    completionTime: new Date(),
                    subscriptionDate: new Date(),
                    status: 'Hold',
                    logoSvgBig: EthLogoBig,
                    logoSvgSmall: EthLogoSmall,
                },
                {
                    depositCurrency: 0.004,
                    incomePerYear: 2.38,
                    targetPrice: 1200,
                    completionTime: new Date(),
                    subscriptionDate: new Date(),
                    status: 'Hold',
                    logoSvgBig: EthLogoBig,
                    logoSvgSmall: EthLogoSmall,
                },
                {
                    depositCurrency: 0.004,
                    incomePerYear: 2.38,
                    targetPrice: 1200,
                    completionTime: new Date(),
                    subscriptionDate: new Date(),
                    logoSvgBig: EthLogoBig,
                    logoSvgSmall: EthLogoSmall,
                },
                {
                    depositCurrency: 0.004,
                    incomePerYear: 2.38,
                    targetPrice: 1200,
                    completionTime: new Date(),
                    subscriptionDate: new Date(),
                    logoSvgBig: EthLogoBig,
                    logoSvgSmall: EthLogoSmall,
                },
            ],
            Usdt: [
                {
                    depositCurrency: 0.004,
                    incomePerYear: 2.38,
                    targetPrice: 1200,
                    completionTime: new Date(),
                    subscriptionDate: new Date(),
                    logoSvgBig: UsdtLogoBig,
                    logoSvgSmall: UsdtLogoSmall,
                },
                {
                    depositCurrency: 0.004,
                    incomePerYear: 2.38,
                    targetPrice: 1200,
                    completionTime: new Date(),
                    subscriptionDate: new Date(),
                    logoSvgBig: UsdtLogoBig,
                    logoSvgSmall: UsdtLogoSmall,
                },
                {
                    depositCurrency: 0.004,
                    incomePerYear: 2.38,
                    targetPrice: 1200,
                    completionTime: new Date(),
                    subscriptionDate: new Date(),
                    logoSvgBig: UsdtLogoBig,
                    logoSvgSmall: UsdtLogoSmall,
                },
                {
                    depositCurrency: 0.004,
                    incomePerYear: 2.38,
                    targetPrice: 1200,
                    completionTime: new Date(),
                    subscriptionDate: new Date(),
                    logoSvgBig: EthLogoBig,
                    logoSvgSmall: UsdtLogoSmall,
                },
            ],
        },
    };
    return data;
}

export type DualityStoreType = ReturnType<typeof createDualityStore>;
