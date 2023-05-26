import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';

import generalComponentStyles from "../../styles/generalComponentStyles";
import React, { memo, useMemo } from "react";
import { useDualityStore } from "../../mobx/appStoreContext";

interface ComponentProps {
    currencyName: string
}

const BalanceCryptoDetails = ({ currencyName }: ComponentProps) => {

    const { wrapper, valueBig, valueSmall, title } = generalComponentStyles();

    const { cryptoCurrencyFullInfo } = useDualityStore(); 

    const info = Object.entries(cryptoCurrencyFullInfo[currencyName][0]);
    const logo = cryptoCurrencyFullInfo[currencyName][0].logoSvgBig();


    const detailsList = useMemo(() => info.map( detailName => {
            if (detailName[0] !== 'logoSvgBig' && detailName[0] !== 'logoSvgSmall'){
                return (
                    <View key={detailName[0]} style={[styles.section, styles.detailInfo, { marginTop: 8 }]}>
                        <Text style={[title, styles.detailName]}>{detailName[0][0].toUpperCase() + detailName[0].substring(1)}</Text>
                        <Text style={[valueSmall, styles.value]}>{typeof detailName[1] === 'object' ? detailName[1].toLocaleString("en-US") : detailName[1]}</Text>
                    </View>)
            }
        }), info);


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
}

export default memo(observer(BalanceCryptoDetails));
