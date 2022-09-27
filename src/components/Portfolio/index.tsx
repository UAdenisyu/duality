import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

import { useState } from "react";

import { observer } from 'mobx-react-lite';

import Checkbox from 'expo-checkbox';

import CoinsIcon from '../../assets/svgs/coins.svg';
import EarnIcon from "../../assets/svgs/earn-small.svg";


import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from '../../styles/generalComponentStyles';


const Portfolio = observer(() => {
    const { wrapper, title, cryptoName, borderedSection } = generalComponentStyles();
    const { grey, plainText, selectedItemColor } = useThemeColors();
    const [isChecked, setChecked] = useState(false);


    const dynamicColors = StyleSheet.create({
        plainText:{
            color: plainText,
        },
    });

    return (
        <View style={wrapper}>
            <Text style={[title, dynamicColors.plainText]}>Portfolio</Text>
            <View style={[styles.section, styles.hideZeroBalances]}>
                <Checkbox
                        style={[styles.checkbox]}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={grey}/>
                <Text style={[cryptoName, styles.checkboxText]}>Hide zero balance’s</Text>
            </View>
            <View style={[borderedSection, styles.section, styles.contentSectionWrapper]}>
                <View style={[styles.contentSection, styles.section]}>
                    <View style={styles.contentTitleIcon}>
                        <CoinsIcon color={selectedItemColor}/>
                    </View>
                    <Text style={[styles.iconTitle, dynamicColors.plainText]}>Spot-account</Text>
                </View>
                <View>
                    <Text style={[styles.balanceCryptoValue, dynamicColors.plainText]}>23,000.00 ETH</Text>
                    <Text style={title}>21 727,23 $</Text>
                </View>
            </View>
            <View style={[styles.section, styles.contentSectionWrapper]}>
                <View style={[styles.contentSection, styles.section]}>
                    <View style={styles.contentTitleIcon}>
                        <EarnIcon color={selectedItemColor}/>
                    </View>
                    <Text style={[title, styles.iconTitle, dynamicColors.plainText]}>Earn</Text>
                </View>
                <View>
                    <Text style={[styles.balanceCryptoValue, dynamicColors.plainText]}>23,000.00 ETH</Text>
                    <Text style={title}>21 727,23 $</Text>
                </View>
            </View>
        </View>
    );
});

export default Portfolio;
