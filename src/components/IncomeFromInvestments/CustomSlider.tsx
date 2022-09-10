import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CommonComponentStyles from '../../styles/CommonComponentStyles';
import useThemeColors from "../../hooks/useThemeColors";
import { useState } from 'react';
import InfoIcon from '../../assets/svgs/infoIcon.svg';
import styles from './styles';

import EthLogo from '../../assets/svgs/EthLogo.svg';

import { View, Text } from "react-native";


export default function CustomSlider(){
    const componentStyles = CommonComponentStyles();
    const { grey, commonText, selectedItemColor } = useThemeColors();


    const [ scrollEnabled, scrollGiveAccess ] = useState(true);
    const [ sliderLength, setSliderLength ] = useState(0);

    const [ userTargetPrice, setUserTargetPrice ] = useState({ cryptoName: 'Eth', price: 100});

    return (
            <MultiSlider
                containerStyle={{backgroundColor: 'transparent', height: 150}}
                values={[0, 8]}
                sliderLength={sliderLength}
                trackStyle={{backgroundColor: selectedItemColor, height: 4}}
                selectedStyle={{backgroundColor: grey}}
                customMarker={() => <View style={[styles.sliderMarker, styles.enabledSliderMarker]}>
                                        <Text>Target price</Text>
                                        <Text>1050</Text>
                                        <Text>Arrow</Text>
                                        <EthLogo/>
                                        <Text>Take USDT</Text>
                                        <InfoIcon color={grey}/>
                                    </View>}
                enabledTwo={false}
                onValuesChangeStart={() => scrollGiveAccess(true)}
                onValuesChangeFinish={values => {
                    scrollGiveAccess(false);
                    setUserTargetPrice({ cryptoName: 'Eth', price: values[0]})
                }}
            />
    );
} 