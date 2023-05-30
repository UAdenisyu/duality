import { observer } from 'mobx-react-lite';
import { View, Dimensions, StyleSheet } from 'react-native';
import { CandlestickChart } from 'react-native-wagmi-charts';

import useGeneralComponentStyles from '../../../styles/useGeneralComponentStyles';

const data = [
    {
        timestamp: 1625945400000,
        open: 33575.25,
        high: 33600.52,
        low: 33475.12,
        close: 33520.11,
    },
    {
        timestamp: 1625946300000,
        open: 33545.25,
        high: 33560.52,
        low: 33510.12,
        close: 33520.11,
    },
    {
        timestamp: 1625947200000,
        open: 33510.25,
        high: 33515.52,
        low: 33250.12,
        close: 33250.11,
    },
    {
        timestamp: 1625948100000,
        open: 33215.25,
        high: 33430.52,
        low: 33215.12,
        close: 33420.11,
    },
];

const styles = StyleSheet.create({
    checkeredBackground: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: -1,
        borderBottomColor: '#D9D9D9',
        // borderWidth: 1,
        height: '110%',
        width: '110%',
        backgroundColor: 'rgba(15, 10, 222, 0.2)',
    },
});

const Chart = () => {
    const wrapperHeight = Dimensions.get('window').width - 48;
    const { wrapper } = useGeneralComponentStyles();

    return (
        <View
            style={[wrapper, { height: wrapperHeight, width: wrapperHeight }]}>
            <View style={styles.checkeredBackground} />
            <CandlestickChart.Provider data={data}>
                <CandlestickChart width={50} height={50}>
                    <CandlestickChart.Candles />
                </CandlestickChart>
            </CandlestickChart.Provider>
        </View>
    );
};

export default observer(Chart);
