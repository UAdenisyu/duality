interface SettingsStore {
    appTheme: 'dark' | 'light';
    toggleAppTheme: () => void;
    faceIdEnabled: boolean;
    toggleFaceId: () => void;
    pushNotificationsEnabled: boolean;
    togglePushNotifications: () => void;
    smsNotificationsEnabled: boolean;
    toggleSmsNotifications: () => void;
    emailNotificationsEnabled: boolean;
    toggleEmailNotifications: () => void;
}

export function createSettingsStore() {
    const data: SettingsStore = {
        appTheme: 'light',
        toggleAppTheme() {
            this.appTheme = this.appTheme === 'dark' ? 'light' : 'dark';
        },
        faceIdEnabled: true,
        toggleFaceId() {
            this.faceIdEnabled = !this.faceIdEnabled;
        },
        pushNotificationsEnabled: false,
        togglePushNotifications() {
            this.pushNotificationsEnabled = !this.pushNotificationsEnabled;
        },
        smsNotificationsEnabled: false,
        toggleSmsNotifications() {
            this.smsNotificationsEnabled = !this.smsNotificationsEnabled;
        },
        emailNotificationsEnabled: false,
        toggleEmailNotifications() {
            this.emailNotificationsEnabled = !this.emailNotificationsEnabled;
        },
    };
    return data;
}

export type SettingsStoreType = ReturnType<typeof createSettingsStore>;
