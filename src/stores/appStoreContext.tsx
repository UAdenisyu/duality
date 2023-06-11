import { useLocalObservable } from 'mobx-react-lite';
import { createContext, FC, useContext } from 'react';

import { createDualityStore, DualityStoreType } from './AppStore.store';
import { AuthStoreType, createAuthStore } from './AuthStore.store';
import { createSettingsStore, SettingsStoreType } from './SettingsStore.store';

interface CompositeStore {
    dualityStore: DualityStoreType;
    authStore: AuthStoreType;
    settingsStore: SettingsStoreType;
}

const CompositeContext = createContext<CompositeStore | null>(null);

export const CompositeProvider: FC<{ children: JSX.Element }> = ({
    children,
}) => {
    const dualityStore = useLocalObservable(createDualityStore);
    const authStore = useLocalObservable(createAuthStore);
    const settingsStore = useLocalObservable(createSettingsStore);

    const compositeStore: CompositeStore = {
        dualityStore,
        authStore,
        settingsStore,
    };

    return (
        <CompositeContext.Provider value={compositeStore}>
            {children}
        </CompositeContext.Provider>
    );
};

export const useDualityStore = (): DualityStoreType => {
    const store = useContext(CompositeContext);
    if (!store) {
        throw new Error(
            'useDualityStore must be used within a CompositeProvider.'
        );
    }
    return store.dualityStore;
};

export const useAuthStore = (): AuthStoreType => {
    const store = useContext(CompositeContext);
    if (!store) {
        throw new Error(
            'useAuthStore must be used within a CompositeProvider.'
        );
    }
    return store.authStore;
};

export const useSettingsStore = (): SettingsStoreType => {
    const store = useContext(CompositeContext);
    if (!store) {
        throw new Error(
            'useSettingsStore must be used within a CompositeProvider.'
        );
    }
    return store.settingsStore;
};
