interface AuthStore {
    isLoggedIn: boolean;
    setIsLoggedIn: (newLoggedInValue: boolean) => void;
    isLoading: boolean;
    toggleLoading: (newLoggedInValue: boolean) => void;
    registeredUsers: {
        userName: string;
        password: string;
    }[];
}

export function createAuthStore() {
    const data: AuthStore = {
        isLoggedIn: true,
        setIsLoggedIn(newLoggedInValue) {
            this.isLoggedIn = newLoggedInValue;
        },
        isLoading: false,
        toggleLoading(value: boolean) {
            this.isLoading = value;
        },
        registeredUsers: [
            {
                userName: 'Demo Trader 1',
                password: 'trademe1',
            },
            {
                userName: 'Demo Trader 2',
                password: 'trademe2',
            },
        ],
    };
    return data;
}

export type AuthStoreType = ReturnType<typeof createAuthStore>;
