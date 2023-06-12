import { observer } from 'mobx-react-lite';
import { FC, memo, useCallback } from 'react';
import { View, Text } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
    withSequence,
    useDerivedValue,
    runOnJS,
    Value,
} from 'react-native-reanimated';
import NumberFormat from 'react-number-format';
import { useDualityStore } from 'stores/appStoreContext';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

interface ComponentProps {
    selectedCrypto?: string;
}

const TotalBalance: FC<ComponentProps> = ({ selectedCrypto }) => {
    const { totalBalance } = useDualityStore();
    const { wrapper, title, valueBig, cryptoName } =
        useGeneralComponentStyles();

    const visibleCrypto = new Value(selectedCrypto);
    const opacity = useSharedValue(1);

    // starting delay of 2000ms
    // play animation 6 times
    // repeat

    opacity.value = withRepeat(
        withSequence(
            withTiming(1, { duration: 2000 }),
            withTiming(0, { duration: 1000, easing: Easing.ease }),
            withTiming(1, { duration: 1000 }),
            withTiming(1, { duration: 1000, easing: Easing.ease })
        ),
        -1,
        true
    );

    const recordResult = (opacityV: number) => {
        if (opacityV === 0) {
            visibleCrypto.setValue(visibleCrypto + '-');
        }
    };

    useDerivedValue(() => {
        runOnJS(recordResult)(opacity.value);
    });

    const animatedBlinkingStyle = useAnimatedStyle(
        () => ({ opacity: opacity.value }),
        []
    );

    const renderText = useCallback(
        (value: string) => <Text style={valueBig}>{value}</Text>,
        [totalBalance, valueBig.color]
    );

    return (
        <View style={wrapper}>
            <Text style={title}>Total balance:</Text>
            <Animated.View style={[styles.body, animatedBlinkingStyle]}>
                <NumberFormat
                    value={totalBalance}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={renderText}
                />
                <Text style={cryptoName} />
            </Animated.View>
        </View>
    );
};

export default memo(observer(TotalBalance));
