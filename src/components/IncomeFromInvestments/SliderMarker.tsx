import EthLogo from 'assets/svgs/EthLogoSmall.svg';
import InfoIcon from 'assets/svgs/infoIcon.svg';
import useThemeColors from 'hooks/useThemeColors';
import React, { FC, memo, useMemo } from 'react';
import { View, Text } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

type ComponentProps = {
    enabled: boolean;
    title: string;
    value: number;
    footer: string;
};

const SliderMarker: FC<ComponentProps> = ({
    enabled,
    title,
    value,
    footer,
}: ComponentProps) => {
    const { markedTextColor, plainTextColor, sliderSelectedStyle } =
        useThemeColors();
    const { titleSmall, markedText } = useGeneralComponentStyles();

    const greyColor = sliderSelectedStyle.backgroundColor;

    const textColor = useMemo(
        () => (enabled ? plainTextColor : null),
        [enabled]
    );

    const lineColor = useMemo(
        () => ({ borderBottomColor: markedTextColor.color }),
        []
    );

    return (
        <View style={styles.sliderMarker}>
            <View style={styles.markerTitleTop}>
                <Text style={[titleSmall, plainTextColor, styles.centeredText]}>
                    {title}
                </Text>
            </View>
            <Text style={[markedText, styles.markerValue, textColor]}>
                {value}
            </Text>
            <View style={[styles.markerArrow, lineColor]} />
            <EthLogo />
            <Text style={[titleSmall, styles.markerTitleBottom]}>{footer}</Text>
            <InfoIcon color={greyColor} />
        </View>
    );
};

export default memo(SliderMarker);
