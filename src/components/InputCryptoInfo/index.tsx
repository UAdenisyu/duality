import { View, Text, StyleSheet, Pressable } from "react-native";
import ShowMoreBtn from '../ShowMoreBtn';
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';
import LogoNotFound from '../../assets/svgs/logoNotFound.svg';
import EthLogo from '../../assets/svgs/EthLogo.svg';
import UsdtLogo from '../../assets/svgs/UsdtLogo.svg';
 
import useThemeColors from "../../hooks/useThemeColors";
import generalComponentStyles from "../../styles/generalComponentStyles";



interface componentProps {
    cryptoName: string,
    yearIncomeMin: number, 
    yearIncomeMax: number, 
    showMoreBtn?: boolean,
    navigation?: any
}

type Data = {
    [key: string]: JSX.Element,
}

const data: Data = {
    'Eth': <EthLogo/>,
    'Usdt': <UsdtLogo/>,
    '': <LogoNotFound/>
}


export default function InputCryptoInfo({ cryptoName = '',
                                          yearIncomeMin = 0, 
                                          yearIncomeMax = 0, 
                                          showMoreBtn = false, 
                                          navigation} : componentProps) {

    const { plainTextColor, markedItemBorderColor } = useThemeColors();
    const { wrapper, valueBig, titleLight, markedText, borderedSection } = generalComponentStyles();

    return (
        <View style={wrapper}>
            <View style={[styles.titleSection, borderedSection]}>
                {data[cryptoName]}
                <Text style={[valueBig, styles.title, plainTextColor]}>Input: {cryptoName}</Text>
            </View>
            <View style={styles.section}>
                <Text style={titleLight}>% Per year</Text>
                <Text style={[markedText, styles.persentsPerYear]}>{yearIncomeMin} - {yearIncomeMax}</Text>
                <Arrow color={markedItemBorderColor.borderColor} style={styles.arrow}/>
            </View>
            { showMoreBtn ? <View style={{ marginTop: 19 }}>
                                <ShowMoreBtn/>
                            </View> : null }
        </View>
    );
}

