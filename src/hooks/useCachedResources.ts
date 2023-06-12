import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

const useCachedResources = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    // Load any resources or data that we need prior to rendering the app

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();
                // Load fonts
                await Font.loadAsync({
                    'poppins-black': require('../assets/fonts/Poppins-Black.ttf'),
                    'poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
                    'poppins-extrabold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
                    'poppins-extralight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
                    'poppins-light': require('../assets/fonts/Poppins-Light.ttf'),
                    'poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
                    'poppins-regular': require('../assets/fonts/Poppins-Regular.ttf'),
                    'poppins-semibold': require('../assets/fonts/Poppins-SemiBold.ttf'),
                    'poppins-thin': require('../assets/fonts/Poppins-Thin.ttf'),
                    'sf-pro-display-bold': require('../assets/fonts/SF-Pro-Display-Bold.ttf'),
                    'sf-pro-display-light': require('../assets/fonts/SF-Pro-Display-Light.ttf'),
                    'sf-pro-display-medium': require('../assets/fonts/SF-Pro-Display-Medium.ttf'),
                    'sf-pro-display-regular': require('../assets/fonts/SF-Pro-Display-Regular.ttf'),
                    'sf-pro-rounded-bold': require('../assets/fonts/SF-Pro-Rounded-Bold.ttf'),
                    'sf-pro-text-medium': require('../assets/fonts/SF-Pro-Text-Medium.ttf'),
                    'sf-pro-text-regular': require('../assets/fonts/SF-Pro-Text-Regular.ttf'),
                    'sf-pro-text-semibold': require('../assets/fonts/SF-Pro-Text-SemiBold.ttf'),
                    'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                    'trap-medium': require('../assets/fonts/Trap-Medium.ttf'),
                    'trap-regular': require('../assets/fonts/Trap-Regular.ttf'),
                    'trap-semibold': require('../assets/fonts/Trap-Semibold.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
};

export default useCachedResources;
