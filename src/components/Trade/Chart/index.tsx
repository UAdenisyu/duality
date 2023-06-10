import { observer } from 'mobx-react-lite';
import { FC, useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import Background from './Background';
import Candle from './Candle';
import mockCandlesData from './mockData';

const styles = StyleSheet.create({
    candlesWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
});

const Chart: FC = () => {
    const wrapperHeight = Dimensions.get('window').width - 48;
    const { wrapper } = useGeneralComponentStyles();

    // FIXME: replace key prop with valid
    const candles = useMemo(
        () =>
            mockCandlesData.map((item, index) => (
                <Candle
                    key={index}
                    candleHeight={item.fullHeight}
                    candleBodyHeight={item.bodyHeight}
                    candleOffsetTop={item.candleOffsetTop}
                    bodyOffsetTop={item.bodyOffsetTop}
                    color={item.color}
                />
            )),
        []
    );

    const wrapperStyle = useMemo(
        () => ({ height: wrapperHeight, width: wrapperHeight, padding: 0 }),
        [wrapperHeight]
    );

    return (
        <View style={[wrapper, wrapperStyle]}>
            <Background />
            <View style={styles.candlesWrapper}>{candles}</View>
        </View>
    );
};

export default observer(Chart);
