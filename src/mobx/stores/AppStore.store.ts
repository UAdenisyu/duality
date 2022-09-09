import React from 'react';
import { observable, action, makeObservable } from 'mobx';
import { CryptoCurrencyFullInfo } from '../../types';
// import useThemeColors from "../../hooks/useThemeColors";

import { optionDarkMode } from '../../types';

class CounterStore {
    @observable appTheme: optionDarkMode = 'light';
    @observable totalBalance: number = 23000;
    @observable cryptoCurrencyFullInfo: CryptoCurrencyFullInfo = {
        'Eth': [
            {
                incomePerYear: 2.38,
                targetPrice: 1200,
                completionTime: new Date(),
            },
            {
                incomePerYear: 25.38,
                targetPrice: 1200,
                completionTime: new Date(),
            },
            {
                incomePerYear: 25.38,
                targetPrice: 1200,
                completionTime: new Date(),
            },
            {
                incomePerYear: 25.38,
                targetPrice: 1200,
                completionTime: new Date(),
            }
        ],
        'Usdt': [
            {
                incomePerYear: 20.38,
                targetPrice: 1200,
                completionTime: new Date(),
            },
            {
                incomePerYear: 20.38,
                targetPrice: 1200,
                completionTime: new Date(),
            },
            {
                incomePerYear: 20.38,
                targetPrice: 1200,
                completionTime: new Date(),
            },
            {
                incomePerYear: 20.38,
                targetPrice: 1200,
                completionTime: new Date(),
            }
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