import React from 'react';
import { useObserver } from 'mobx-react-lite';

import { optionDarkMode } from '../../types';

import EthLogoBig from '../../assets/svgs/EthLogo.svg';
import EthLogoSmall from '../../assets/svgs/EthLogoSmall.svg';
import UsdtLogoBig from '../../assets/svgs/UsdtLogo.svg';
import UsdtLogoSmall from '../../assets/svgs/UsdtLogoSmall.svg';


export function createDualityStore() {
    return {
        appTheme: 'light',
        setAppTheme(value: string) {
            this.appTheme = value;
        },
        totalBalance: 23000,
        setTotalBalance(value: number) {
            this.totalBalance = value;
        },
        cryptoCurrencyFullInfo: {
            'Eth': [
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
            'Usdt': [
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
        }
    }
}

export type TStore = ReturnType<typeof createDualityStore>;