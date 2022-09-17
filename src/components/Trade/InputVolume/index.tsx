import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../../mobx/stores/AppStore.store';

import useThemeColors from "../../../hooks/useThemeColors";
import CommonComponentStyles from "../../../styles/CommonComponentStyles";
import { TextInput } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";
import { useState } from "react";


const InputVolume = observer(({ titleText, fullScreenWidth=true }: { titleText: 'Volume' | 'Price', fullScreenWidth?: boolean}) => {

    const { wrapper, title, titleLight, input } = CommonComponentStyles();

    const themeColors = useThemeColors();

    const [isTakeProfit, setTakeProfit] = useState(false);
    const [isStopLoss, setStopLoss] = useState(false);

    const dynamicColors = StyleSheet.create({
        input:{
            borderColor: themeColors.componentDividingLine,
            color: themeColors.plainText,
        }
    });

    return (
        <View style={[wrapper, fullScreenWidth ? null : styles.body]}>
            <Text style={title}>
                {titleText}
            </Text>
            <View style={[input, styles.inputWrapper]}>
                <TextInput
                    style={[styles.inputText, dynamicColors.input]}
                    keyboardType='decimal-pad'
                    onChange={(text) => text.nativeEvent.text}
                    selectionColor={themeColors.plainText}/>
            </View>
            <View style={fullScreenWidth ? styles.section : null}>
                <View style={[styles.section, styles.checkboxWrapper]}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isTakeProfit}
                        onValueChange={setTakeProfit}
                        color={themeColors.extraLight}/>
                    <Text style={[titleLight, styles.checkboxTitle]}>{titleText === 'Volume' ? 'Take profit' : 'Stop loss' }</Text>
                </View>
                <View style={[styles.section, styles.checkboxWrapper]}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isStopLoss}
                        onValueChange={setStopLoss}
                        color={themeColors.extraLight}/>
                    <Text style={[titleLight, styles.checkboxTitle]}>{titleText === 'Volume' ? 'Stop loss' : 'Good till Cancel' }</Text>
                </View>
            </View>
        </View>
    );
});

export default InputVolume;
