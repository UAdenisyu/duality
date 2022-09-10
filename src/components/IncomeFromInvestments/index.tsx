import { View, Text, Image } from "react-native";
import 'react-native-gesture-handler';

import styles from './styles';
import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';

import CommonComponentStyles from '../../styles/CommonComponentStyles';
import BottomBordered from "../../styles/BottomBordered";

import InfoIcon from '../../assets/svgs/infoIcon.svg';
import EthLogo from '../../assets/svgs/EthLogo.svg';
import MathSquareX from '../../assets/svgs/MathSquareX.svg';

import { useState } from 'react';

import useThemeColors from "../../hooks/useThemeColors";
import SliderMarker from './SliderMarker';

import MultiSlider from '@ptomasroos/react-native-multi-slider';


export default function IncomeFromInvestments() {
    const componentStyles = CommonComponentStyles();
    const { grey, commonText, selectedItemColor } = useThemeColors();
    const addBottomLine = BottomBordered();

    const [ scrollEnabled, scrollGiveAccess ] = useState(true);
    const [ sliderLength, setSliderLength ] = useState(0);


    const [ userTargetPrice, setUserTargetPrice ] = useState({ cryptoName: 'Eth', price: 100});

    return (
        <View style={componentStyles.wrapper}>
            <View style={styles.section}>
                <Text style={[{color: grey}, styles.title]}>
                    Income from investments
                </Text>
                <View style={styles.titleIcon}>
                    <InfoIcon color={grey}/>
                </View>
            </View>
            <View style={[addBottomLine.bordered, styles.sliderWrapper]} onLayout={e => {setSliderLength(e.nativeEvent.layout.width)}}>
                <MultiSlider
                    containerStyle={{backgroundColor: 'transparent', height: 150}}
                    values={[0, 10]}
                    sliderLength={sliderLength}
                    trackStyle={{backgroundColor: selectedItemColor, height: 4}}
                    selectedStyle={{backgroundColor: grey}}
                    customMarkerLeft={() => <SliderMarker 
                        logo={() => <EthLogo/>} 
                        enabled={true}
                        title={'Target price'}
                        value={userTargetPrice.price}
                        footer={'Take USDT'}
                        bottomIcon={() => <InfoIcon color={grey}/>}
                    />}
                    customMarkerRight={() => <SliderMarker 
                        logo={() => <EthLogo/>} 
                        enabled={true}
                        title={'Target price'}
                        value={8}
                        footer={'Take ETH'}
                        bottomIcon={() => <InfoIcon color={grey}/>}
                    />}
                    isMarkersSeparated={true}
                    enabledTwo={false}
                    onValuesChange={values => setUserTargetPrice({ cryptoName: 'Eth', price: values[0]})}
                    onValuesChangeStart={() => scrollGiveAccess(true)}
                    onValuesChangeFinish={() => {
                        scrollGiveAccess(false);
                    }}
                />
            </View>
            <View style={styles.incomeInfo}>
                <View style={styles.section}>
                    <EthLogo/>
                    <Text style={[styles.textInfo, {color: commonText}]}>
                        When the final price of ETH is equal to or greater than $1500, you will receive $1,110,120 (your net income is $10,200)
                    </Text>
                    <View style={styles.xIcon}>
                        <MathSquareX color={selectedItemColor}/>
                    </View>
                </View>
            </View>
            <View style={styles.incomeInfo}>
                <View style={styles.section}>
                    <EthLogo/>
                    <Text style={[styles.textInfo, {color: commonText}]}>
                        When the final price of ETH is equal to or greater than $1500, you will receive $1,110,120 (your net income is $10,200)
                    </Text>
                    <View style={styles.xIcon}>
                        <MathSquareX color={selectedItemColor}/>
                    </View>
                </View>
            </View>
        </View>
    );
}