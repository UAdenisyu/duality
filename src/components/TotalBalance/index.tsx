import { observer } from 'mobx-react-lite';
import { memo } from 'react';
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

import styles from './styles';
import { useDualityStore } from '../../mobx/appStoreContext';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

const TotalBalance = ({ selectedCrypto }: { selectedCrypto?: string }) => {
    const dualityStore = useDualityStore();
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
    return (
        <View style={wrapper}>
            <Text style={title}>Total balance:</Text>

            <Animated.View style={[styles.body, animatedBlinkingStyle]}>
                <NumberFormat
                    value={dualityStore.totalBalance}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={(value) => (
                        <Text style={valueBig}>{value}</Text>
                    )}
                />
                <Text style={cryptoName} />
            </Animated.View>
        </View>
    );
};

export default memo(observer(TotalBalance));
