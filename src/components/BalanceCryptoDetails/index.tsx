import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';


import CommonComponentStyles from "../../styles/CommonComponentStyles";
import React from "react";

const BalanceCryptoDetails = observer(({ currencyName }: {currencyName: string}) => {

    const { wrapper, valueBig, valueSmall, title} = CommonComponentStyles();

    const { cryptoCurrencyFullInfo } = useCounterStore(); 

    const info = cryptoCurrencyFullInfo[currencyName][0];
    const logo = cryptoCurrencyFullInfo[currencyName][0].logoSvgBig();


    const detailsList = Object.entries(info).map( detailName => {
        if (detailName[0] !== 'logoSvgBig' && detailName[0] !== 'logoSvgSmall'){
            return (
                <View key={detailName[0]} style={[styles.section, styles.detailInfo, { marginTop: 8 }]}>
                    <Text style={[title, styles.detailName]}>{detailName[0][0].toUpperCase() + detailName[0].substring(1)}</Text>
                    <Text style={[valueSmall, styles.value]}>{typeof detailName[1] === 'object' ? detailName[1].toLocaleString("en-US") : detailName[1]}</Text>
                </View>)
        }});


    return (
        <View style={[wrapper, styles.container]}>
            <View style={styles.section}>
                <View style={styles.titleLogo}>
                    { logo}
                </View>
                <Text style={[valueBig, styles.title]}>
                    {currencyName.toUpperCase()}
                </Text>
            </View>
            <View style={styles.detailsList}>
                {detailsList}
            </View>
        </View>
    );
});

export default BalanceCryptoDetails;
