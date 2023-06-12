import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import Login from 'screens/Login';
import NotFoundScreen from 'screens/NotFoundScreen';
import GetStarted from 'screens/SignUp';
import { useAuthStore } from 'stores/appStoreContext';
import { RootStackParamList } from 'types/navigationStacks';

import BottomTabNavigator from '../BottomTabNavigator';

const RootNavigator = () => {
    const TabStack = createNativeStackNavigator<RootStackParamList>();
    const { isLoggedIn } = useAuthStore();

    return (
        <TabStack.Navigator
            initialRouteName={isLoggedIn ? 'Root' : 'GetStarted'}>
            <TabStack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <TabStack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }}
            />
            <TabStack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <TabStack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
        </TabStack.Navigator>
    );
};

export default observer(RootNavigator);
