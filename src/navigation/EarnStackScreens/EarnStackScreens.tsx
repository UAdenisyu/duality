import { createStackNavigator } from '@react-navigation/stack';
import HeaderBackButton from 'components/HeaderBackButton';
import EarnMain from 'screens/Earn';
import EarnInput from 'screens/Earn/EarnInput';
import EarnInputDetails from 'screens/Earn/EarnInputDetails';

import { childNavigatorOptions, mainNavigatorOptions } from '../styles';

const EarnStackScreens = () => {
    const EarnStack = createStackNavigator();
    return (
        <EarnStack.Navigator>
            <EarnStack.Screen
                options={{
                    ...mainNavigatorOptions,
                    headerTitle: 'EarnMain',
                    headerLeft: () => null,
                }}
                name="EarnMain"
                component={EarnMain}
            />
            <EarnStack.Screen
                options={{
                    ...childNavigatorOptions,
                    headerTitleAlign: 'center',
                    headerTitle: 'Input',
                    headerLeft: () => <HeaderBackButton />,
                }}
                name="EarnInput"
                component={EarnInput}
            />
            <EarnStack.Screen
                options={{
                    ...mainNavigatorOptions,
                    headerTitle: 'Input',
                    headerLeft: () => <HeaderBackButton />,
                }}
                name="EarnInputDetails"
                component={EarnInputDetails}
            />
        </EarnStack.Navigator>
    );
};

export default EarnStackScreens;
