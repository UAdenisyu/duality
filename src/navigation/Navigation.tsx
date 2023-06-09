import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { ImageBackground } from 'react-native';

import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './RootNavigator';

const Navigation = () => {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        },
    };

    return (
        <NavigationContainer theme={MyTheme} linking={LinkingConfiguration}>
            <ImageBackground
                source={require('../assets/images/mainBackground.png')}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}>
                <RootNavigator />
            </ImageBackground>
        </NavigationContainer>
    );
};

export default observer(Navigation);
