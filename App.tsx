import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { StatusBar } from 'react-native';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider >
                <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
                <Navigation colorScheme={colorScheme} />
            </SafeAreaProvider>
        );
    }
}
