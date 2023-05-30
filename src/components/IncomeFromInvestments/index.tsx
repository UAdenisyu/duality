import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useState, ReactElement, memo } from 'react';
import { View, Text } from 'react-native';

import SliderMarker from './SliderMarker';
import styles from './styles';
import EthLogo from '../../assets/svgs/EthLogoSmall.svg';
import MathSquareX from '../../assets/svgs/MathSquareX.svg';
import InfoIcon from '../../assets/svgs/infoIcon.svg';
import useThemeColors from '../../hooks/useThemeColors';
import useGeneralComponentStyles from '../../styles/useGeneralComponentStyles';

const IncomeFromInvestments = () => {
    const { markedTextColor, titleTextColor, plainTextColor } =
        useThemeColors();
    const { wrapper, borderedSection, title } = useGeneralComponentStyles();
    const greyColor = titleTextColor.color;

    const [sliderLength, setSliderLength] = useState(0);
    const [userTargetPrice, setUserTargetPrice] = useState({
        cryptoName: 'Eth',
        price: 2,
    });

    const logo = <EthLogo />;

    const bottomTipsSection = (logo: ReactElement, textContent: string) => (
        <View style={styles.incomeInfo}>
            <View style={styles.section}>
                <View style={styles.icon}>{logo}</View>
                <Text style={[styles.textInfo, plainTextColor]}>
                    {textContent}
                </Text>
                <View style={styles.icon}>
                    <MathSquareX color={markedTextColor.color} />
                </View>
            </View>
        </View>
    );

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
                onLayout={(e) => {
                    setSliderLength(e.nativeEvent.layout.width);
                }}>
                <MultiSlider
                    containerStyle={{
                        backgroundColor: 'transparent',
                        height: 150,
                    }}
                    values={[2, 8]}
                    sliderLength={sliderLength}
                    trackStyle={{
                        backgroundColor: markedTextColor.color,
                        height: 4,
                    }}
                    selectedStyle={{ backgroundColor: greyColor }}
                    customMarkerLeft={() => (
                        <SliderMarker
                            logo={() => logo}
                            enabled
                            title="Target price"
                            value={userTargetPrice.price}
                            footer="Take USDT"
                            bottomIcon={() => <InfoIcon color={greyColor} />}
                        />
                    )}
                    customMarkerRight={() => (
                        <SliderMarker
                            logo={() => logo}
                            enabled={false}
                            title="Approximately spot price"
                            value={6}
                            footer="Take ETH"
                            bottomIcon={() => <InfoIcon color={greyColor} />}
                        />
                    )}
                    isMarkersSeparated
                    enabledTwo={false}
                    enabledOne
                    onValuesChange={(values) =>
                        setUserTargetPrice({
                            cryptoName: 'Eth',
                            price: values[0],
                        })
                    }
                    onValuesChangeStart={() => {}}
                    onValuesChangeFinish={() => {}}
                />
            </View>
            {bottomTipsSection(
                logo,
                'When the final price of ETH is equal to or greater than $1500, you will receive $1,110,120 (your net income is $10,200)'
            )}
            {bottomTipsSection(
                logo,
                'When the final price of ETH is equal to or greater than $1500, you will receive $1,110,120 (your net income is $10,200)'
            )}
        </View>
    );
};

export default memo(IncomeFromInvestments);
