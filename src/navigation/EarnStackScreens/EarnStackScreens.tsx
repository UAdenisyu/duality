import { createStackNavigator } from '@react-navigation/stack';

import { Pressable, View } from 'react-native';
import styles, { childNavigatorOptions, mainNavigatorOptions } from '../styles';

import EarnMain from '../../screens/Earn';
import EarnInput from '../../screens/Earn/Input';

const EarnStackScreens = ({ navigation }: { navigation: any }) => {
  const EarnStack = createStackNavigator();
  const selectedCryptoName : string = navigation.getState().routes.find((screen : any) => screen.name === 'Earn')?.state?.routes?.find((screen : any) => screen.name === 'Earn/Input')?.params.cryptoName;
  return (
    <EarnStack.Navigator>
          <EarnStack.Screen
              options={{
                  ...mainNavigatorOptions,
                  headerTitle: 'Earn',
                  headerLeft: ()=> null,
              }}
              name='Earn/Main'
              component={EarnMain}
              
          />
          <EarnStack.Screen
              options={{
                  ...childNavigatorOptions,
                  headerTitleAlign: 'center',
                  headerTitle: 'Input ' + selectedCryptoName?.toUpperCase(),
                  headerLeft: () => (
                      <Pressable style={styles.goBackBtn}  onPress={() => navigation.goBack()}>
                          <View style={styles.headerBackArrow}/>
                      </Pressable>)
              }}
              name='Earn/Input'
              component={EarnInput}
          />
    </EarnStack.Navigator>
  );
}

export default EarnStackScreens;