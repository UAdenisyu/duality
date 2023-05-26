import { View, Text, StyleSheet, ViewComponent } from "react-native";
import styles from "./styles";

import { memo, useState } from "react";

import { observer } from 'mobx-react-lite';

import Checkbox from 'expo-checkbox';


import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from '../../styles/generalComponentStyles';
import PortfolioOption from "./PortfolioOption";


const Portfolio = () => {
    const { wrapper, title, cryptoName, borderedSection } = generalComponentStyles();
    const { titleTextColor, plainTextColor } = useThemeColors();
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
                <Text style={[cryptoName, styles.checkboxText]}>Hide zero balance's</Text>
            </View>
            <PortfolioOption titleText={'Spot-account'} />
            <View style={borderedSection}/>
            <PortfolioOption titleText={'Earn'} />
        </View>
    );
}

export default memo(observer(Portfolio));
