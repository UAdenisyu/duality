import useThemeColors from 'hooks/useThemeColors';
import { useRef, memo, useState, FC } from 'react';
import { Animated, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'black',
        height: 31,
        width: 51,
        borderRadius: 15,
        justifyContent: 'center',
        padding: 2,
    },
    circle: {
        width: 27,
        height: 27,
        borderRadius: 15,
        backgroundColor: '#202226',
    },
});

const SwithToggler: FC = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleAnimation = useRef(
        new Animated.Value(isEnabled ? 1 : 0)
    ).current;

    const { markedItemBackgroundColor } = useThemeColors();

    const onPress = () => {
        setIsEnabled(!isEnabled);
        Animated.timing(toggleAnimation, {
            toValue: isEnabled ? 0 : 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const circlePositionStyle = {
        transform: [
            {
                translateX: toggleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 20],
                }),
            },
        ],
    };

    return (
        <Pressable
            style={[styles.wrapper, markedItemBackgroundColor]}
            onPress={onPress}>
            <Animated.View style={[styles.circle, circlePositionStyle]} />
        </Pressable>
    );
};

export default memo(SwithToggler);
