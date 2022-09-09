import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import useCachedResources from './src/hooks/useCachedResources';
import useThemeColors from './src/hooks/useThemeColors';
import Navigation from './src/navigation';
import { StatusBar } from 'react-native';

export default function App() {
    const isLoadingComplete = useCachedResources();
    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider >
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <Navigation/>
            </SafeAreaProvider>
        );
    }
}
