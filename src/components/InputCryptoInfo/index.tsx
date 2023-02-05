import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import ShowMoreBtn from '../ShowMoreBtn';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';
import LogoNotFound from '../../assets/svgs/logoNotFound.svg';
import EthLogo from '../../assets/svgs/EthLogo.svg';
import UsdtLogo from '../../assets/svgs/UsdtLogo.svg';
 
import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from "../../styles/generalComponentStyles";
import { SvgProps } from "react-native-svg";
import OpenBottomModalScreenButton from "../OpenBottomModalScreenButton";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { useDualityStore } from "../../mobx/appStoreContext";


interface componentProps {
    cryptoName: string,
    yearIncomeMin: number, 
    yearIncomeMax: number, 
    showMoreBtn?: boolean,
}

type SvgArray = {
    [key: string]: JSX.Element,
}

const cryptoNamesvgArray: SvgArray = {
    'Eth': <EthLogo/>,
    'Usdt': <UsdtLogo/>,
    '': <LogoNotFound/>
}

export default function InputCryptoInfo({ cryptoName = '',
                                          yearIncomeMin = 0, 
                                          yearIncomeMax = 0, 
                                          showMoreBtn = false} : componentProps) {

    const { plainTextColor, markedItemBorderColor } = useThemeColors();
    const { wrapper, valueBig, titleLight, markedText, borderedSection } = generalComponentStyles();
    const navigation = useNavigation();
    const {isLoggedIn} = useDualityStore();
    console.log(isLoggedIn);
    const showMorePressed : () => void = () => {
        navigation.navigate('EarnInput', {cryptoName});
    }

    return (
        <View style={wrapper}>
            <View style={[styles.titleSection, borderedSection]}>
                {cryptoNamesvgArray[cryptoName]}
                <Text style={[valueBig, styles.title, plainTextColor]}>Input: {cryptoName}</Text>
            </View>
            <View style={styles.section}>
                <Text style={titleLight}>% Per year</Text>
                <Text style={[markedText, styles.persentsPerYear]}>{yearIncomeMin} - {yearIncomeMax}</Text>
                <Arrow color={markedItemBorderColor.borderColor} style={styles.arrow}/>
            </View>
            {!showMoreBtn || <ShowMoreBtn onPress={showMorePressed} wrapperStyle={{ marginTop: 19 }}/>}
        </View>
    );
}

