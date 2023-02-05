import { createStackNavigator } from '@react-navigation/stack';

import { Pressable, View } from 'react-native';
import styles, { childNavigatorOptions, mainNavigatorOptions } from '../styles';

import EarnMain from '../../screens/Earn';
import EarnInput from '../../screens/Earn/Input';
import InputDetails from '../../screens/Earn/InputDetails';

const EarnStackScreens = ({ navigation }: { navigation: any }) => {
  const EarnStack = createStackNavigator();
  return (
    <EarnStack.Navigator>
            <EarnStack.Screen
                options={{
                    ...mainNavigatorOptions,
                    headerTitle: 'Earn',
                    headerLeft: () => null,
                }}
                name='EarnMain'
                component={EarnMain}
            />
            <EarnStack.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitleAlign: 'center',
                    headerTitle: 'Input',
                    headerLeft: () => (
                        <Pressable style={styles.goBackBtn}  onPress={() => navigation.goBack()}>
                            <View style={styles.headerBackArrow}/>
                        </Pressable>)
                }}
                name='EarnInput'
                component={EarnInput}
            />
            <EarnStack.Screen
                options={{
                    ...mainNavigatorOptions,
                    headerTitle: 'Input',
                    headerLeft: () => (
                        <Pressable style={styles.goBackBtn}  onPress={() => navigation.goBack()}>
                            <View style={styles.headerBackArrow}/>
                        </Pressable>)
                }}
                name='EarnInputDetails'
                component={InputDetails}
            />
    </EarnStack.Navigator>
  );
}

export default EarnStackScreens;