import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";


import React from 'react';
import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from '../../styles/generalComponentStyles';


type Props = { logo: CallableFunction,
    enabled: boolean,
    title: string,
    value: number,
    footer: string,
    bottomIcon: CallableFunction 
}

export default function SliderMarker({ logo, enabled, title, value, footer, bottomIcon }: Props){
    
    const { markedTextColor, plainTextColor } = useThemeColors();
    const { titleSmall, markedText } = generalComponentStyles();

    return (
        <View style={styles.sliderMarker}>
            <View style={styles.markerTitleTop}>
                <Text style={[titleSmall, plainTextColor, { textAlign: 'center',}]}>{title}</Text>
            </View>
            <Text style={[markedText, styles.markerValue, enabled ? plainTextColor : null]}>{value}</Text>
            <View style={[styles.markerArrow, { borderBottomColor: markedTextColor.color }]}></View>
            {logo()}
            <Text style={[titleSmall, styles.markerTitleBottom]}>{footer}</Text>
            {bottomIcon()}
        </View>
    );
} 