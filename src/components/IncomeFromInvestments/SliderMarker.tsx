import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

import React from 'react';
import useThemeColors from "../../hooks/useThemeColors";



type Props = { logo: CallableFunction,
    enabled: boolean,
    title: string,
    value: number,
    footer: string,
    bottomIcon: CallableFunction 
}

export default function SliderMarker({ logo, enabled, title, value, footer, bottomIcon }: Props){
    
    const { selectedItemColor, plainText, grey } = useThemeColors();

    const dynamicColors = StyleSheet.create({
        plainText: {
            color: plainText
        },
        arrow: {
            borderBottomColor: selectedItemColor
        },
        tipText: {
            color: grey,
        }
    });

    return (
        <View style={enabled ? [styles.sliderMarker, styles.enabledSliderMarker] : styles.sliderMarker}>
            <Text style={[styles.markerItem, styles.markerTitle, dynamicColors.plainText]}>{title}</Text>
            <Text style={[styles.markerItem, styles.markerValue, dynamicColors.plainText]}>{value}</Text>
            <View style={[styles.markerItem, styles.markerArrow, dynamicColors.arrow]}></View>
            {logo()}
            <Text style={[styles.markerItem, styles.markerBottomTitle, dynamicColors.tipText]}>{footer}</Text>
            <View style={[styles.markerItem, styles.markerBottomIcon]}>
                {bottomIcon()}
            </View>
        </View>
    );
} 