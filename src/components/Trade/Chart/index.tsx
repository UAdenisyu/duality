import { View, Text, Dimensions } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../../mobx/stores/AppStore.store';

import useThemeColors from "../../../hooks/useThemeColors";


import generalComponentStyles from "../../../styles/generalComponentStyles";

import { CandlestickChart } from 'react-native-wagmi-charts';

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
  

const wrapperHeight = Dimensions.get('window').width - 48;

const Chart = () => {

    const { totalBalance } = useCounterStore();
    const { wrapper, title, valueBig, cryptoName } = generalComponentStyles();

    return (

        <View style={[wrapper, { height: wrapperHeight, overflow: 'hidden'}]}>
            <CandlestickChart.Provider data={data}>
                <CandlestickChart width={50}>
                    <CandlestickChart.Candles/>
                </CandlestickChart>
            </CandlestickChart.Provider>
        </View>
    );
};

export default observer(Chart);
