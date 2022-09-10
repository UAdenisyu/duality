import { View, Text } from "react-native";
import useThemeColors from "../../hooks/useThemeColors";
import styles from "./styles";
import InfoIcon from '../../assets/svgs/infoIcon.svg';
import EthLogo from '../../assets/svgs/EthLogo.svg';

import React from 'react';


export default function SliderMarker({ logo, enabled, title, value, footer, bottomIcon }: { logo: CallableFunction, enabled: boolean, title: string, value: number, footer: string, bottomIcon: CallableFunction }){
    
    const { grey } = useThemeColors();

    return (
        <View style={enabled ? [styles.sliderMarker, styles.enabledSliderMarker] : styles.sliderMarker}>
            <Text style={[styles.markerItem, styles.markerTitle]}>{title}</Text>
            <Text style={[styles.markerItem, styles.markerValue]}>{value}</Text>
            <View style={[styles.markerItem, styles.markerArrow]}></View>
            {logo()}
            <Text style={[styles.markerItem, styles.markerBottomTitle]}>{footer}</Text>
            <View style={[styles.markerItem, styles.markerBottomIcon]}>
                {bottomIcon()}
            </View>
        </View>
    );
} 