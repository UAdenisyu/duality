import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Background from './Background';
import Candle from './Candle';
import mockCandlesData from './mockData';
import useGeneralComponentStyles from '../../../styles/useGeneralComponentStyles';

const styles = StyleSheet.create({
    candlesWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
});

const Chart = () => {
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

    return (
        <View
            style={[
                wrapper,
                { height: wrapperHeight, width: wrapperHeight, padding: 0 },
            ]}>
            <Background />
            <View style={styles.candlesWrapper}>{candles}</View>
        </View>
    );
};

export default observer(Chart);
