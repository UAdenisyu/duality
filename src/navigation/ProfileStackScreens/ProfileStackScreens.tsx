import { createStackNavigator } from '@react-navigation/stack';
import Profile from 'screens/Profile';
import { ProfileStackParamList } from 'types/navigationStacks';

import SettingsStackScreens from './SettingsStackScreens';
import { childNavigatorOptions, mainNavigatorOptions } from '../styles';

const ProfileStackScreens = () => {
    const ProfileStack = createStackNavigator<ProfileStackParamList>();
    return (
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen
                options={{
                    ...mainNavigatorOptions,
                    headerTitle: 'Profile',
                    headerLeft: () => null,
                }}
                name="Profile"
                component={Profile}
            />
            <ProfileStack.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitle: 'Settings',
                    headerTitleAlign: 'center',
                    headerShown: false,
                }}
                name="SettingsStack"
                component={SettingsStackScreens}
            />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackScreens;
