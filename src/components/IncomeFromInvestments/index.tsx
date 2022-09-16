import { View, Text, StyleSheet } from "react-native";

import styles from './styles';

import CommonComponentStyles from '../../styles/CommonComponentStyles';

import InfoIcon from '../../assets/svgs/infoIcon.svg';
import EthLogo from '../../assets/svgs/EthLogoSmall.svg';
import MathSquareX from '../../assets/svgs/MathSquareX.svg';

import { useState } from 'react';

import useThemeColors from "../../hooks/useThemeColors";
import SliderMarker from './SliderMarker';

import MultiSlider from '@ptomasroos/react-native-multi-slider';


export default function IncomeFromInvestments() {

    const componentStyles = CommonComponentStyles();
    const { grey, plainText, selectedItemColor } = useThemeColors();

    const [ sliderLength, setSliderLength ] = useState(0);

    const logo = <EthLogo/>

    const [ userTargetPrice, setUserTargetPrice ] = useState({ cryptoName: 'Eth', price: 2});

    const dynamicColors = StyleSheet.create({
        plainText: {
            color: plainText
        },
        titleText: {
            color: grey,
        }
    });

    return (
        <View style={componentStyles.wrapper}>
            <View style={styles.section}>
                <Text style={[styles.title, dynamicColors.titleText]}>
                    Income from investments
                </Text>
                <View style={styles.titleIcon}>
                    <InfoIcon color={grey}/>
                </View>
            </View>
            <View style={[componentStyles.borderedSection, styles.sliderWrapper]} onLayout={e => {setSliderLength(e.nativeEvent.layout.width)}}>
                <MultiSlider
                    containerStyle={{backgroundColor: 'transparent', height: 150}}
                    values={[2, 8]}
                    sliderLength={sliderLength}
                    trackStyle={{backgroundColor: selectedItemColor, height: 4}}
                    selectedStyle={{backgroundColor: grey}}
                    customMarkerLeft={() => <SliderMarker 
                        logo={() => logo} 
                        enabled={true}
                        title={'Target price'}
                        value={userTargetPrice.price}
                        footer={'Take USDT'}
                        bottomIcon={() => <InfoIcon color={grey}/>}
                    />}
                    customMarkerRight={() => <SliderMarker 
                        logo={() => logo} 
                        enabled={true}
                        title={'Target price'}
                        value={6}
                        footer={'Take ETH'}
                        bottomIcon={() => <InfoIcon color={grey}/>}
                    />}
                    isMarkersSeparated={true}
                    enabledTwo={false}
                    enabledOne={true}
                    onValuesChange={values => setUserTargetPrice({ cryptoName: 'Eth', price: values[0]})}
                    onValuesChangeStart={() => {}}
                    onValuesChangeFinish={() => {}}
                />
            </View>
            <View style={styles.incomeInfo}>
                <View style={styles.section}>
                    <View style={styles.icon}>
                        {logo}
                    </View>
                    <Text style={[styles.textInfo, dynamicColors.plainText]}>
                        When the final price of ETH is equal to or greater than $1500, you will receive $1,110,120 (your net income is $10,200)
                    </Text>
                    <View style={styles.icon}>
                        <MathSquareX color={selectedItemColor}/>
                    </View>
                </View>
            </View>
            <View style={styles.incomeInfo}>
                <View style={styles.section}>
                    <View style={styles.icon}>
                        {logo}
                    </View>
                    <Text style={[styles.textInfo, dynamicColors.plainText]}>
                        When the final price of ETH is equal to or greater than $1500, you will receive $1,110,120 (your net income is $10,200)
                    </Text>
                    <View style={styles.icon}>
                        <MathSquareX color={selectedItemColor}/>
                    </View>
                </View>
            </View>
        </View>
    );
}