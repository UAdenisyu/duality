import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

import { useState } from "react";

import { observer } from 'mobx-react-lite';

import Checkbox from 'expo-checkbox';

import CoinsIcon from '../../assets/svgs/coins.svg';
import EarnIcon from "../../assets/svgs/earn-small.svg";


import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from '../../styles/generalComponentStyles';


const Portfolio = () => {
    const { wrapper, title, cryptoName, borderedSection } = generalComponentStyles();
    const { titleTextColor, plainTextColor, markedTextColor } = useThemeColors();
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={wrapper}>
            <Text style={[title, plainTextColor]}>Portfolio</Text>
            <View style={[styles.section, styles.hideZeroBalances]}>
                <Checkbox
                        style={[styles.checkbox]}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={titleTextColor.color}/>
                <Text style={[cryptoName, styles.checkboxText]}>Hide zero balance’s</Text>
            </View>
            <View style={[borderedSection, styles.section, styles.contentSectionWrapper]}>
                <View style={[styles.contentSection, styles.section]}>
                    <View style={styles.contentTitleIcon}>
                        <CoinsIcon color={markedTextColor.color}/>
                    </View>
                    <Text style={[styles.iconTitle, plainTextColor]}>Spot-account</Text>
                </View>
                <View>
                    <Text style={[styles.balanceCryptoValue, plainTextColor]}>23,000.00 ETH</Text>
                    <Text style={title}>21 727,23 $</Text>
                </View>
            </View>
            <View style={[styles.section, styles.contentSectionWrapper]}>
                <View style={[styles.contentSection, styles.section]}>
                    <View style={styles.contentTitleIcon}>
                        <EarnIcon color={markedTextColor.color}/>
                    </View>
                    <Text style={[title, styles.iconTitle, plainTextColor]}>Earn</Text>
                </View>
                <View>
                    <Text style={[styles.balanceCryptoValue, plainTextColor]}>23,000.00 ETH</Text>
                    <Text style={title}>21 727,23 $</Text>
                </View>
            </View>
        </View>
    );
}

export default observer(Portfolio);
