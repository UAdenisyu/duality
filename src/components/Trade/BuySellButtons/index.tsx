import { View, Text, StyleSheet, Pressable } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';

import generalComponentStyles from "../../../styles/generalComponentStyles";

const BuySellButtons = () => {

    const { wrapper, valueBig, titleLight } = generalComponentStyles();

    return (
        <View style={[wrapper, styles.section]}>
            <Pressable style={[styles.btn, styles.btnBuy]}>
                <Text style={[titleLight, styles.btnTitle]}>
                    BUY 
                </Text>
                <Text style={[valueBig, styles.btnValue]}>
                    1.20662
                </Text>
            </Pressable>
            <Pressable style={[styles.btn, styles.btnSell]}>
                <Text style={[titleLight, styles.btnTitle]}>
                    SELL 
                </Text>
                <Text style={[valueBig, styles.btnValue]}>
                    1.20662
                </Text>
            </Pressable>
        </View>
    );
};

export default observer(BuySellButtons);
