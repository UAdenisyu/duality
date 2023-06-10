import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import Loading from './src/screens/Loading';
import { DualityProvider } from './src/stores/appStoreContext';

// useMemo везде, где map и conditional rendering (условный рендеринг)

// navigation порезать на куски - [done]

// создавать функции отдельно и заворачивать в useCallback
// onLayout = useCallback((e) => {
//     setSliderLength(e.nativeEvent.layout.width)
// }, [setSliderLength]); - [done]

// динамические стайлы хранить в хуках - [done]

// оборачивать функции в observer в другом месте; - [done]
// export default observer(OpenCenterModalScreenButton); - [done]

// OrderItem переделать

// SummaryPrice
// const actionsBlock в useMemo - [done]
// const detailsBlock в useMemo - [done]

// TableList - переделать с использованием FlatList

// ScrollViewComponent, VirtualizedList - использовать в проэкте

// Использовать useWindowDimensions вместо Dimensions
// Ніколи не задавай висоту блока використовуючи height отриманий через windowDimension

// не использовать классы из mobx - [done]
// разбить на state на каждую задачу

// useNavigation вместо передачи navigation - [done]

// реализовать логику

// 🚨 The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
// @ptomasroos/react-native-multi-slider, @react-native-community/blur, @react-navigation/bottom-tabs, @react-navigation/material-bottom-tabs, @react-navigation/native, @react-navigation/native-stack, @react-navigation/stack, immutability-helper, lodash, mobx-react-lite, react-native-animated-loader, react-native-charts-wrapper, react-native-drop-shadow, react-native-haptic-feedback, react-native-linear-gradient, react-native-vector-icons, react-native-vector-image, react-native-wagmi-charts, react-number-format, @babel/plugin-proposal-export-namespace-from, babel-plugin-transform-decorators-legacy, react-native-svg-transformer, react-test-renderer

const App: FC = () => {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <DualityProvider>
                <SafeAreaProvider>
                    <StatusBar translucent backgroundColor="transparent" />
                    <Navigation />
                    <Loading />
                </SafeAreaProvider>
            </DualityProvider>
        );
    }
};

export default App;
