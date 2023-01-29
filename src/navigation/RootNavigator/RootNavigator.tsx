import NotFoundScreen from '../../screens/NotFoundScreen';

import { useDualityStore } from '../../mobx/appStoreContext';
import Login from '../../screens/Login';
import GetStarted from '../../screens/SignUp';
import BottomTabNavigator from '../BottomTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';

const RootNavigator = () => {

  const TabStack = createNativeStackNavigator<RootStackParamList>();
  const {isLoggedIn} = useDualityStore();

  return (
      <TabStack.Navigator 
          initialRouteName={isLoggedIn ? "Root" : "GetStarted"}>
          <TabStack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
          <TabStack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
          <TabStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <TabStack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </TabStack.Navigator>
  );
}

export default RootNavigator;