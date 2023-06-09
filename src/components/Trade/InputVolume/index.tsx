import Checkbox from 'expo-checkbox';
import { observer } from 'mobx-react-lite';
import { FC, memo, useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles';
import useThemeColors from '../../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../../styles/useGeneralComponentStyles';

type ComponentProps = {
    titleText: 'Volume' | 'Price';
    fullScreenWidth?: boolean;
};

const InputVolume: FC<ComponentProps> = ({
    titleText,
    fullScreenWidth = true,
}) => {
    const { wrapper, title, titleLight, input } = useGeneralComponentStyles();

    const { inputColors, plainTextColor, modalLightBackgroundColor } =
        useThemeColors();

    const [isTakeProfit, setTakeProfit] = useState(false);
    const [isStopLoss, setStopLoss] = useState(false);

    const mainWrapper = useMemo(
        () => !fullScreenWidth && styles.body,
        [fullScreenWidth]
    );
    const nestedWrapper = useMemo(
        () => fullScreenWidth && styles.section,
        [fullScreenWidth]
    );

    return (
        <View style={[wrapper, mainWrapper]}>
            <Text style={title}>{titleText}</Text>
            <View style={[input, styles.inputWrapper]}>
                <TextInput
                    style={[styles.inputText, inputColors]}
                    keyboardType="decimal-pad"
                    onChange={(text) => text.nativeEvent.text}
                    selectionColor={plainTextColor.color}
                />
            </View>
            <View style={nestedWrapper}>
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
