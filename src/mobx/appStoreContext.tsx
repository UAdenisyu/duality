import { useLocalObservable } from 'mobx-react-lite';
import { createContext, useContext } from 'react';

import { createDualityStore, TStore } from './stores/AppStore.store';

const DualityContext = createContext<TStore | null>(null);

export const DualityProvider = ({ children }: any) => {
    const dualityStore = useLocalObservable(createDualityStore);

    return (
        <DualityContext.Provider value={dualityStore}>
            {children}
        </DualityContext.Provider>
    );
};

export const useDualityStore = () => {
    const store = useContext(DualityContext);
    if (!store) {
        throw new Error('useStore must be used within a StoreProvider.');
    }
    return store;
};
