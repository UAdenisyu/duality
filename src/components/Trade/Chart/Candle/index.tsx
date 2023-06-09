import { FC, memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import useThemeColors from '../../../../hooks/useThemeColors';

const styles = StyleSheet.create({
    candleWrapper: {
        width: '2%',
        marginHorizontal: '0.5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    candleLine: {
        width: '20%',
        height: '100%',
        position: 'absolute',
    },
    candleBody: {
        width: '100%',
    },
});

interface ComponentProps {
    candleHeight: number;
    candleBodyHeight: number;
    candleOffsetTop: number;
    bodyOffsetTop: number;
    color: boolean;
}

const Candle: FC<ComponentProps> = ({
    candleHeight,
    candleBodyHeight,
    candleOffsetTop = 0,
    bodyOffsetTop = 0,
    color,
}) => {
    const { candleGreen, candleRed } = useThemeColors();

    const candleColor = useMemo(
        () => (color ? candleGreen : candleRed),
        [color]
    );
    const candleOffset = useMemo(
        () => ({
            marginTop: candleOffsetTop,
            height: candleHeight,
            padding: 0,
        }),
        [candleOffsetTop]
    );
    const bodyOffset = useMemo(
        () => ({ marginTop: bodyOffsetTop, height: candleBodyHeight }),
        [bodyOffsetTop]
    );

    return (
        <View style={[styles.candleWrapper, candleOffset]}>
            <View style={[styles.candleBody, candleColor, bodyOffset]} />
            <View style={[styles.candleLine, candleColor]} />
        </View>
    );
};

export default memo(Candle);
