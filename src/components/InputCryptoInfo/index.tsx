import { View, Text, StyleSheet, Pressable } from "react-native";
import ShowMoreBtn from '../ShowMoreBtn';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';
import LogoNotFound from '../../assets/svgs/logoNotFound.svg';
import EthLogo from '../../assets/svgs/EthLogo.svg';
import UsdtLogo from '../../assets/svgs/UsdtLogo.svg';
import OpenCenterModalScreenButton from "../OpenCenterModalScreenButton";
import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from "../../styles/CommonComponentStyles";



type options = {
    cryptoName: string,
    yearIncomeMin: number, 
    yearIncomeMax: number, 
    showMoreBtn: boolean,
}

type Data = {
    [key: string]: JSX.Element,
}

const data: Data = {
    'Eth': <EthLogo/>,
    'Usdt': <UsdtLogo/>,
    '': <LogoNotFound/>
}

const termsOfServiceList: Array<string> = [
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
    'You can pay with your actives, free to your sport account',
]


export default function InputCryptoInfo({ cryptoName = '', yearIncomeMin = 0, yearIncomeMax = 0, showMoreBtn = true} : options) {

    const { componentDividingLine, plainText, selectedItemColor } = useThemeColors();
    const { wrapper, valueBig, titleLight, valueSmall } = CommonComponentStyles();

    const dynamicColors = StyleSheet.create({
        bordered: {
            borderBottomColor: componentDividingLine,
        },
        plainText:{
            color: plainText,
        },
        marked: {
            color: selectedItemColor,
        }
    });

    return (
        <View style={wrapper}>
            <View style={[
                    styles.titleSection,
                    dynamicColors.bordered
                ]}>
                {data[cryptoName]}
                <Text style={[valueBig, styles.title, dynamicColors.plainText]}>Input: {cryptoName}</Text>
            </View>
            <View style={styles.section}>
                <Text style={[titleLight, styles.persentsPerYearTitle]}>% Per year</Text>
                <Text style={[styles.persentsPerYearValue, dynamicColors.marked]}>{yearIncomeMin} - {yearIncomeMax}</Text>
                <Arrow color={selectedItemColor} style={styles.arrow}/>
            </View>
            { showMoreBtn ? <View style={{ marginTop: 19 }}>
                    <OpenCenterModalScreenButton
                        targetContentComponent={<ShowMoreBtn/>}
                        textContent = {termsOfServiceList}
                        showCancelButton = {false}/>
                </View> : null }
        </View>
    );
}

