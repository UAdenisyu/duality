import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import useThemeColors from '../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

type ComponentProps = {
    logo: CallableFunction;
    enabled: boolean;
    title: string;
    value: number;
    footer: string;
    bottomIcon: CallableFunction;
};

export default function SliderMarker({
    logo,
    enabled,
    title,
    value,
    footer,
    bottomIcon,
}: ComponentProps) {
    const { markedTextColor, plainTextColor } = useThemeColors();
    const { titleSmall, markedText } = useGeneralComponentStyles();

    return (
        <View style={styles.sliderMarker}>
            <View style={styles.markerTitleTop}>
                <Text
                    style={[
                        titleSmall,
                        plainTextColor,
                        { textAlign: 'center' },
                    ]}>
                    {title}
                </Text>
            </View>
            <Text
                style={[
                    markedText,
                    styles.markerValue,
                    enabled ? plainTextColor : null,
                ]}>
                {value}
            </Text>
            <View
                style={[
                    styles.markerArrow,
                    { borderBottomColor: markedTextColor.color },
                ]}
            />
            {logo()}
            <Text style={[titleSmall, styles.markerTitleBottom]}>{footer}</Text>
            {bottomIcon()}
        </View>
    );
}
