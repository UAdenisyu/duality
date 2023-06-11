import { useLocalObservable } from 'mobx-react-lite';
import { createContext, useContext } from 'react';

import { createDualityStore, DualityStoreType } from './AppStore.store';
import { AuthStoreType, createAuthStore } from './AuthStore.store';
import { createSettingsStore, SettingsStoreType } from './SettingsStore.store';

const DualityContext = createContext<DualityStoreType | null>(null);
const AuthContext = createContext<AuthStoreType | null>(null);
const SettingContext = createContext<SettingsStoreType | null>(null);

export const DualityProvider = ({ children }: any) => {
    const dualityStore = useLocalObservable(createDualityStore);
    const authStore = useLocalObservable(createAuthStore);
    const settingsStore = useLocalObservable(createSettingsStore);

    return (
        <DualityContext.Provider value={dualityStore}>
            <SettingContext.Provider value={settingsStore}>
                <AuthContext.Provider value={authStore}>
                    {children}
                </AuthContext.Provider>
            </SettingContext.Provider>
        </DualityContext.Provider>
    );
};

export const useDualityStore = () => {
    const store = useContext(DualityContext);
    if (!store) {
        throw new Error('useDualityStore must be used within a StoreProvider.');
    }
    return store;
};

export const useAuthStore = () => {
    const store = useContext(AuthContext);
    if (!store) {
        throw new Error(
            'useAuthStore must be used within an AppStoreProvider.'
        );
    }
    return store;
};

export const useSettingsStore = () => {
    const store = useContext(SettingContext);
    if (!store) {
        throw new Error(
            'useSettingsStore must be used within an AppStoreProvider.'
        );
    }
    return store;
};
