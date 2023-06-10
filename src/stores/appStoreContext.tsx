import { useLocalObservable } from 'mobx-react-lite';
import { createContext, useContext } from 'react';

import { createDualityStore, DualityStoreType } from './AppStore.store';
import { AuthStoreType, createAuthStore } from './AuthStore.store';

const DualityContext = createContext<DualityStoreType | null>(null);
const AuthContext = createContext<AuthStoreType | null>(null);

export const DualityProvider = ({ children }: any) => {
    const dualityStore = useLocalObservable(createDualityStore);
    const authStore = useLocalObservable(createAuthStore);

    return (
        <DualityContext.Provider value={dualityStore}>
            <AuthContext.Provider value={authStore}>
                {children}
            </AuthContext.Provider>
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

export const useAuthStore = () => {
    const store = useContext(AuthContext);
    if (!store) {
        throw new Error(
            'useAuthStore must be used within an AppStoreProvider.'
        );
    }
    return store;
};
