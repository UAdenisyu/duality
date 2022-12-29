import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, {FC} from 'react';
import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import { StatusBar } from 'react-native';
import { DualityProvider } from './src/mobx/appStoreContext';


// useMemo везде, где map и conditional rendering (условный рендеринг)

// navigation порезать на куски в src/stacks

// создавать функции отдельно и заворачивать в useCallback
// onLayout = useCallback((e) => {
//     setSliderLength(e.nativeEvent.layout.width)
// }, [setSliderLength]);

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

// useNavigation вместо передачи navigation

// реализовать логику



const App:FC = () => {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <DualityProvider>
                <SafeAreaProvider >
                    <StatusBar translucent backgroundColor="transparent"/>
                    <Navigation/>
                </SafeAreaProvider>
            </DualityProvider>
        );
    }
};

export default App;