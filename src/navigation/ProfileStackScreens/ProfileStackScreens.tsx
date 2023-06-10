import { createStackNavigator } from '@react-navigation/stack';
import HeaderBackButton from 'components/HeaderBackButton';
import Profile from 'screens/Profile';
import Settings from 'screens/Profile/Settings';
import { ProfileStackParamList } from 'types/navigationStacks';

import { childNavigatorOptions, mainNavigatorOptions } from '../styles';

const ProfileStackScreens = () => {
    const ProfileStack = createStackNavigator<ProfileStackParamList>();
    return (
        <ProfileStack.Navigator>
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
                    headerLeft: () => <HeaderBackButton />,
                }}
                name="Settings"
                component={Settings}
            />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackScreens;
