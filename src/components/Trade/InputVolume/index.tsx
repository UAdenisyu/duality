import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';

import useThemeColors from "../../../hooks/useThemeColors";
import generalComponentStyles from "../../../styles/generalComponentStyles";
import { TextInput } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";
import { useState } from "react";

type Props = {
    titleText: 'Volume' | 'Price',
    fullScreenWidth?: boolean
}

const InputVolume = ({ titleText, fullScreenWidth=true } : Props) => {

    const { wrapper, title, titleLight, input } = generalComponentStyles();

    const {inputColors, plainTextColor, modalLightBackgroundColor } = useThemeColors();

    const [isTakeProfit, setTakeProfit] = useState(false);
    const [isStopLoss, setStopLoss] = useState(false);

    return (
        <View style={[wrapper, fullScreenWidth ? null : styles.body]}>
            <Text style={title}>
                {titleText}
            </Text>
            <View style={[input, styles.inputWrapper]}>
                <TextInput
                    style={[styles.inputText, inputColors]}
                    keyboardType='decimal-pad'
                    onChange={(text) => text.nativeEvent.text}
                    selectionColor={plainTextColor.color}/>
            </View>
            <View style={fullScreenWidth ? styles.section : null}>
                <View style={[styles.section, styles.checkboxWrapper]}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isTakeProfit}
                        onValueChange={setTakeProfit}
                        color={modalLightBackgroundColor.backgroundColor}/>
                    <Text style={[titleLight, styles.checkboxTitle]}>{titleText === 'Volume' ? 'Take profit' : 'Stop loss' }</Text>
                </View>
                <View style={[styles.section, styles.checkboxWrapper]}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isStopLoss}
                        onValueChange={setStopLoss}
                        color={modalLightBackgroundColor.backgroundColor}/>
                    <Text style={[titleLight, styles.checkboxTitle]}>{titleText === 'Volume' ? 'Stop loss' : 'Good till Cancel' }</Text>
                </View>
            </View>
        </View>
    );
};

export default observer(InputVolume);
