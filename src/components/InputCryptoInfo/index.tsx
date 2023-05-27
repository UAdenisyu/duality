import { Text, View } from "react-native";
import EthLogo from '../../assets/svgs/EthLogo.svg';
import UsdtLogo from '../../assets/svgs/UsdtLogo.svg';
import Arrow from '../../assets/svgs/arrow.svg';
import LogoNotFound from '../../assets/svgs/logoNotFound.svg';
import ShowMoreBtn from '../ShowMoreBtn';
import styles from './styles';
 
import { useNavigation } from "@react-navigation/native";
import useThemeColors from "../../hooks/useThemeColors";
import { useDualityStore } from "../../mobx/appStoreContext";
import generalComponentStyles from "../../styles/generalComponentStyles";
import { EarnTabParamList } from "../../types";
import { memo } from "react";
import { StackNavigationProp } from "@react-navigation/stack";


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

type RootStackNavigationProp = StackNavigationProp<EarnTabParamList>;

const InputCryptoInfo = ({ cryptoName = '',
                                          yearIncomeMin = 0, 
                                          yearIncomeMax = 0, 
                                          showMoreBtn = false} : componentProps) => {

    const { plainTextColor, markedItemBorderColor } = useThemeColors();
    const { wrapper, valueBig, titleLight, markedText, borderedSection } = generalComponentStyles();
    const navigation = useNavigation<RootStackNavigationProp>();
    const {isLoggedIn} = useDualityStore();
    console.log('isLoggedIn', isLoggedIn);
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

export default memo(InputCryptoInfo);