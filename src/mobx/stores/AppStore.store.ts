import React from 'react';
import { observable, action, makeObservable } from 'mobx';

class CounterStore {
    @observable totalBalance: number = 23000;

    constructor() {
        makeObservable(this)
    }

    @action.bound
    setTotalBalance(value: number) {
        this.totalBalance = value;
    }
}

// Instantiate the counter store.
const counterStore = new CounterStore();

// Create a React Context with the counter store instance.
export const CounterStoreContext = React.createContext(counterStore);
export const useCounterStore = () => React.useContext(CounterStoreContext)