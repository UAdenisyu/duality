import MultiSlider from '@ptomasroos/react-native-multi-slider';
import InfoIcon from 'assets/svgs/infoIcon.svg';
import useThemeColors from 'hooks/useThemeColors';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import BottomTipsSection from './BottomTipsSection';
import SliderMarker from './SliderMarker';
import styles from './styles';

const IncomeFromInvestments: FC = () => {
    const { markedItemBackgroundColor, sliderSelectedStyle } = useThemeColors();
    const { wrapper, borderedSection, title } = useGeneralComponentStyles();
    const greyColor = sliderSelectedStyle.backgroundColor;

    const [sliderLength, setSliderLength] = useState(0);
    const [userTargetPrice, setUserTargetPrice] = useState({
        cryptoName: 'Eth',
        price: 2,
    });

    const sliderTrackStyle = useMemo(
        () => ({
            ...markedItemBackgroundColor,
            height: 4,
        }),
        []
    );

    const customMarkerLeft = useCallback(
        () => (
            <SliderMarker
                enabled
                title="Target price"
                value={userTargetPrice.price}
                footer="Take USDT"
            />
        ),
        []
    );

    const customMarkerRight = useCallback(
        () => (
            <SliderMarker
                enabled={false}
                title="Approximately spot price"
                value={6}
                footer="Take ETH"
            />
        ),
        []
    );

    const onValuesChange = (values: number[]) => {
        setUserTargetPrice({
            cryptoName: 'Eth',
            price: values[0],
        });
    };

    const onLayoutChange = (e: any) => {
        setSliderLength(e.nativeEvent.layout.width);
    };

    return (
        <View style={wrapper}>
            <View style={styles.section}>
                <Text style={title}>Income from investments</Text>
                <View style={styles.titleIcon}>
                    <InfoIcon color={greyColor} />
                </View>
            </View>
            <View
                style={[borderedSection, styles.sliderWrapper]}
                onLayout={onLayoutChange}>
                <MultiSlider
                    containerStyle={styles.sliderContainerStyle}
                    values={[2, 8]}
                    sliderLength={sliderLength}
                    trackStyle={sliderTrackStyle}
                    selectedStyle={sliderSelectedStyle}
                    customMarkerLeft={customMarkerLeft}
                    customMarkerRight={customMarkerRight}
                    isMarkersSeparated
                    enabledTwo={false}
                    enabledOne
                    onValuesChange={onValuesChange}
                    onValuesChangeStart={() => {}}
                    onValuesChangeFinish={() => {}}
                />
            </View>
            <BottomTipsSection textContent="When the final price of ETH is equal to or greater than $1500, you will receive $1,110,120 (your net income is $10,200)" />
            <BottomTipsSection textContent="When the final price of ETH is equal to or greater than $1500, you will receive $1,110,120 (your net income is $10,200)" />
        </View>
    );
};

export default memo(IncomeFromInvestments);
