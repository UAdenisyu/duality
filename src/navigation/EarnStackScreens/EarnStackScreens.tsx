import { createStackNavigator } from '@react-navigation/stack';

import { Pressable, View } from 'react-native';
import styles, { childNavigatorOptions, mainNavigatorOptions } from '../styles';

import EarnMain from '../../screens/Earn';
import EarnInput from '../../screens/Earn/Input';

const EarnStackScreens = ({ navigation }: { navigation: any }) => {
  const EarnStack = createStackNavigator();
  return (
    <EarnStack.Navigator>
          <EarnStack.Screen
              options={{
                  ...mainNavigatorOptions,
                  headerTitle: 'Earn',
              }}
              name='Earn/main'
              component={EarnMain}
          />
          <EarnStack.Screen
              options={{
                  ...childNavigatorOptions,
                  headerTitleAlign: 'center',
                  headerTitle: 'Input',
                  headerLeft: () => (
                      <Pressable onPress={() => navigation.navigate('Earn/main')}>
                          <View style={styles.headerBackArrow}/>
                      </Pressable>)
              }}
              name='Earn/input'
              component={EarnInput}
          />
    </EarnStack.Navigator>
  );
}

export default EarnStackScreens;