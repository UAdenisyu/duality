import Checkbox from 'expo-checkbox';
import { observer } from 'mobx-react-lite';
import { memo, useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles';
import useThemeColors from '../../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../../styles/useGeneralComponentStyles';

type ComponentProps = {
    titleText: 'Volume' | 'Price';
    fullScreenWidth?: boolean;
};

const InputVolume = ({ titleText, fullScreenWidth = true }: ComponentProps) => {
    const { wrapper, title, titleLight, input } = useGeneralComponentStyles();

    const { inputColors, plainTextColor, modalLightBackgroundColor } =
        useThemeColors();

    const [isTakeProfit, setTakeProfit] = useState(false);
    const [isStopLoss, setStopLoss] = useState(false);

    return (
        <View style={[wrapper, fullScreenWidth ? null : styles.body]}>
            <Text style={title}>{titleText}</Text>
            <View style={[input, styles.inputWrapper]}>
                <TextInput
                    style={[styles.inputText, inputColors]}
                    keyboardType="decimal-pad"
                    onChange={(text) => text.nativeEvent.text}
                    selectionColor={plainTextColor.color}
                />
            </View>
            <View style={fullScreenWidth ? styles.section : null}>
                <View style={[styles.section, styles.checkboxWrapper]}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isTakeProfit}
                        onValueChange={setTakeProfit}
                        color={modalLightBackgroundColor.backgroundColor}
                    />
                    <Text style={[titleLight, styles.checkboxTitle]}>
                        {titleText === 'Volume' ? 'Take profit' : 'Stop loss'}
                    </Text>
                </View>
                <View style={[styles.section, styles.checkboxWrapper]}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isStopLoss}
                        onValueChange={setStopLoss}
                        color={modalLightBackgroundColor.backgroundColor}
                    />
                    <Text style={[titleLight, styles.checkboxTitle]}>
                        {titleText === 'Volume'
                            ? 'Stop loss'
                            : 'Good till Cancel'}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default memo(observer(InputVolume));
