import { View,Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import useThemeColors from "../../hooks/useThemeColors";
import CommonComponentStyles from "../../styles/CommonComponentStyles";

import LogoNotFound from '../../assets/svgs/logoNotFound.svg';
import EthLogo from '../../assets/svgs/EthLogoSmall.svg';
import UsdtLogo from '../../assets/svgs/UsdtLogoSmall.svg';


type Data = {
    [key: string]: JSX.Element,
}

const data: Data = {
    'Eth': <EthLogo/>,
    'Usdt': <UsdtLogo/>,
    '': <LogoNotFound/>
}


const ShortInfoCryptoBalance = observer(({ cryptoName }: {cryptoName: string, }) => {
    const { cryptoCurrencyFullInfo } = useCounterStore();
    const { valueSmall, valueBig, title} = CommonComponentStyles();

    const { grey, commonText } = useThemeColors();

    return (
        <View style={[styles.section, {flex: 0.1}]}>
            <View style={styles.logoContainer}>
                {data[cryptoName]}
            </View>
            <View style={{flex: 0.45}}>
                <Text style={[valueSmall, {fontFamily: 'poppins-medium'}]}>{cryptoName.toUpperCase()}</Text>
                <Text style={[title, {fontSize: 10}]}>Etherium</Text>
            </View>
            <View style={styles.values}>
                <Text style={[valueBig, styles.valueCrypto]}>23,000.00</Text>
                <Text style={[title, styles.valueDollar]}>21 727,23 $</Text>
            </View>
        </View>
    );
});

export default ShortInfoCryptoBalance;
