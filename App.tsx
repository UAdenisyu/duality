import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import useCachedResources from './src/hooks/useCachedResources';
import useThemeColors from './src/hooks/useThemeColors';
import Navigation from './src/navigation';
import { StatusBar } from 'react-native';

import { observer } from 'mobx-react-lite';



const App = observer(() => {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider >
                <StatusBar translucent backgroundColor="transparent"/>
                <Navigation/>
            </SafeAreaProvider>
        );
    }
});

export default App;