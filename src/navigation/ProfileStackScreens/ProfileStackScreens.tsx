import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Pressable, View } from 'react-native';

import Profile from '../../screens/Profile';
import Settings from '../../screens/Settings';
import styles, { mainNavigatorOptions, childNavigatorOptions } from '../styles';

const ProfileStackScreens = () => {
    const navigation = useNavigation();
    const ProfileStack = createStackNavigator();
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                options={{
                    ...mainNavigatorOptions,
                    headerTitle: 'ProfileMain',
                    headerLeft: () => null,
                }}
                name="ProfileMain"
                component={Profile}
            />
            <ProfileStack.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitle: 'Settings',
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <Pressable
                            style={styles.goBackBtn}
                            onPress={() => navigation.goBack()}>
                            <View style={styles.headerBackArrow} />
                        </Pressable>
                    ),
                }}
                name="Settings"
                component={Settings}
            />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackScreens;
