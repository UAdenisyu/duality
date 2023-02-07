import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useDualityStore } from '../../mobx/appStoreContext';

import NumberFormat from 'react-number-format';
import generalComponentStyles from "../../styles/generalComponentStyles";

import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withDelay,
    withTiming,
    withSequence,
    cancelAnimation
  } from 'react-native-reanimated';

const TotalBalance = ({selectedCrypto} : {selectedCrypto?: string}) => {
    const dualityStore = useDualityStore();
    const { wrapper, title, valueBig, cryptoName } = generalComponentStyles();

    const opacity = useSharedValue(0);
    // starting delay of 2000ms
    // play animation 6 times
    // repeat
    opacity.value = withRepeat(
        withSequence(
            withTiming(1, {duration: 1000, easing: Easing.ease}),
            withTiming(1, {duration: 2000}),
            withTiming(0, {duration: 1000, easing: Easing.ease}),
            withTiming(0, {duration: 2000}),
        ),
        -1,
        true,
    );

    const animatedBlinkingStyle = useAnimatedStyle(() => ({ opacity: opacity.value }), []);

    return (
        <View style={wrapper}>
            <Text style={title}>Total balance:</Text>
            <Animated.View style={[styles.body, animatedBlinkingStyle]}>
                <NumberFormat
                    value={dualityStore.totalBalance}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={(value) => <Text style={valueBig}>{value}</Text>}
                />
                <Text style={cryptoName}>{selectedCrypto}</Text>
            </Animated.View>
        </View>
    );
};

export default observer(TotalBalance);
