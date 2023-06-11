import { createStackNavigator } from '@react-navigation/stack';
import HeaderBackButton from 'components/HeaderBackButton';
import NotFoundScreen from 'screens/NotFoundScreen';
import Settings from 'screens/Profile/Settings';
import ChangePassword from 'screens/Profile/Settings/ChangePassword';
import { SettingsStackParamList } from 'types/navigationStacks';

import { childNavigatorOptions } from '../styles';

const SettingsStackScreen = () => {
    const ProfileStack = createStackNavigator<SettingsStackParamList>();
    return (
        <ProfileStack.Navigator initialRouteName="Settings">
            <ProfileStack.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitle: 'Settings',
                    headerTitleAlign: 'center',
                    headerLeft: () => <HeaderBackButton />,
                }}
                name="Settings"
                component={Settings}
            />
            <ProfileStack.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitle: 'Language',
                    headerTitleAlign: 'center',
                    headerLeft: () => <HeaderBackButton />,
                }}
                name="Language"
                component={NotFoundScreen}
            />
            <ProfileStack.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitle: 'Change password',
                    headerTitleAlign: 'center',
                    headerLeft: () => <HeaderBackButton />,
                }}
                name="ChangePassword"
                component={ChangePassword}
            />
        </ProfileStack.Navigator>
    );
};

export default SettingsStackScreen;
