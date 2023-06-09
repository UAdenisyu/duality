import SplashScreenTitle from 'assets/svgs/SplashScreenTitle.svg';
import { StyleSheet, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
    splashScreenTitle: {
        position: 'absolute',
    },
});

const AnimatedTitle = () => {
    const AnimatedTitle = Animated.createAnimatedComponent(View);

    const opacity = useSharedValue(0);

    // Set the opacity value to animate between 0 and 1
    opacity.value = withRepeat(
        withTiming(1, { duration: 1000, easing: Easing.ease }),
        -1,
        true
    );

    const animatedStyle = useAnimatedStyle(
        () => ({ opacity: opacity.value }),
        []
    );

    return (
        <AnimatedTitle style={[styles.splashScreenTitle, animatedStyle]}>
            <SplashScreenTitle />
        </AnimatedTitle>
    );
};

export default AnimatedTitle;
