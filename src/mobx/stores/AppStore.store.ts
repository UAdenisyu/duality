import React from 'react';
import { observable, action, makeObservable } from 'mobx';
import { CryptoCurrencyFullInfo } from '../../types';

import { optionDarkMode } from '../../types';

import EthLogoBig from '../../assets/svgs/EthLogo.svg';
import EthLogoSmall from '../../assets/svgs/EthLogoSmall.svg';
import UsdtLogoBig from '../../assets/svgs/UsdtLogo.svg';
import UsdtLogoSmall from '../../assets/svgs/UsdtLogoSmall.svg';


class CounterStore {
    @observable appTheme: optionDarkMode = 'light';
    @observable totalBalance: number = 23000;
    @observable cryptoCurrencyFullInfo: CryptoCurrencyFullInfo = {
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

    constructor() {
        makeObservable(this)
    }

    @action.bound
    setTotalBalance(value: number) {
        this.totalBalance = value;
    }

    @action.bound
    setAppTheme(value: optionDarkMode) {
        this.appTheme = value;
    }
    
}

// Instantiate the counter store.
const counterStore = new CounterStore();

// Create a React Context with the counter store instance.
export const CounterStoreContext = React.createContext(counterStore);
export const useCounterStore = () => React.useContext(CounterStoreContext)