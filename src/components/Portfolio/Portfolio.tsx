import { View, Text } from "react-native";
import styles from "./styles";

import { useState } from "react";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import Checkbox from 'expo-checkbox';

import CoinsIcon from '../../assets/svgs/coins.svg';
import EarnIcon from "../../assets/svgs/earn-small.svg";


import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from '../../styles/CommonComponentStyles';
import BottomBorderedStyle from "../../styles/BottomBorderedStyle";


const Portfolio = observer(() => {
    const { wrapper, title, cryptoName } = CommonComponentStyles();
    const { grey, commonText, selectedItemColor } = useThemeColors();
    const { bordered } = BottomBorderedStyle();
    const [isChecked, setChecked] = useState(false);


    return (
        <View style={wrapper}>
            <Text style={[title, {color: commonText}]}>Portfolio</Text>
            <View style={[styles.section, styles.hideZeroBalances]}>
                <Checkbox
                        style={[styles.checkbox, {borderColor: grey}]}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={grey}/>
                <Text style={[cryptoName, styles.checkboxText]}>Hide zero balance’s</Text>
            </View>
            <View style={[styles.section, bordered, styles.contentSectionWrapper]}>
                <View style={[styles.contentSection, styles.section]}>
                    <View style={styles.contentTitleIcon}>
                        <CoinsIcon color={selectedItemColor}/>
                    </View>
                    <Text style={[styles.iconTitle, {color: commonText}]}>Spot-account</Text>
                </View>
                <View>
                    <Text style={[styles.balanceCryptoValue, {color: commonText}]}>23,000.00 ETH</Text>
                    <Text style={title}>21 727,23 $</Text>
                </View>
            </View>
            <View style={[styles.section, styles.contentSectionWrapper]}>
                <View style={[styles.contentSection, styles.section]}>
                    <View style={styles.contentTitleIcon}>
                        <EarnIcon color={selectedItemColor}/>
                    </View>
                    <Text style={[title, styles.iconTitle, {color: commonText}]}>Earn</Text>
                </View>
                <View>
                    <Text style={[styles.balanceCryptoValue, {color: commonText}]}>23,000.00 ETH</Text>
                    <Text style={title}>21 727,23 $</Text>
                </View>
            </View>
        </View>
    );
});

export default Portfolio;
