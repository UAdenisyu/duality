import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC, memo, useEffect, useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';
import { useSettingsStore } from 'stores/appStoreContext';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'black',
        height: 31,
        width: 51,
        borderRadius: 15,
        justifyContent: 'center',
        padding: 2,
        marginRight: -14,
    },
    circle: {
        width: 27,
        height: 27,
        borderRadius: 15,
        backgroundColor: '#202226',
    },
});

type settingTogglerId =
    | 'dark-mode'
    | 'face-id'
    | 'push-notifications'
    | 'sms-notifications'
    | 'email-notifications';
interface ComponentProps {
    targetId: settingTogglerId;
}

const SwithToggler: FC<ComponentProps> = ({ targetId }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const settingsStore = useSettingsStore();
    const toggleAnimation = useRef(
        new Animated.Value(Number(isEnabled))
    ).current;

    const { markedItemBackgroundColor } = useThemeColors();

    useEffect(() => {
        switch (targetId) {
            case 'dark-mode':
                setIsEnabled(settingsStore.appTheme === 'dark');
                break;
            case 'face-id':
                setIsEnabled(settingsStore.faceIdEnabled);
                break;
            case 'push-notifications':
                setIsEnabled(settingsStore.pushNotificationsEnabled);
                break;
            case 'sms-notifications':
                setIsEnabled(settingsStore.smsNotificationsEnabled);
                break;
            case 'email-notifications':
                setIsEnabled(settingsStore.emailNotificationsEnabled);
                break;
        }
    }, []);

    useEffect(() => {
        Animated.timing(toggleAnimation, {
            toValue: Number(isEnabled),
            duration: 100,
            useNativeDriver: true,
        }).start();
    }, [isEnabled]);

    const onPress = () => {
        setIsEnabled(!isEnabled);
        switch (targetId) {
            case 'dark-mode':
                settingsStore.toggleAppTheme();
                break;
            case 'face-id':
                settingsStore.toggleFaceId();
                break;
            case 'push-notifications':
                settingsStore.togglePushNotifications();
                break;
            case 'sms-notifications':
                settingsStore.toggleSmsNotifications();
                break;
            case 'email-notifications':
                settingsStore.toggleEmailNotifications();
                break;
        }
    };

    const circlePositionStyle = {
        transform: [
            {
                translateX: toggleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 20],
                }),
            },
        ],
    };

    return (
        <Pressable
            style={[styles.wrapper, markedItemBackgroundColor]}
            onPress={onPress}>
            <Animated.View style={[styles.circle, circlePositionStyle]} />
        </Pressable>
    );
};

export default memo(observer(SwithToggler));
