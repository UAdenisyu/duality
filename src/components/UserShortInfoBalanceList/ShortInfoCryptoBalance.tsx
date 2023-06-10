import EthLogo from 'assets/svgs/EthLogoSmall.svg';
import UsdtLogo from 'assets/svgs/UsdtLogoSmall.svg';
import LogoNotFound from 'assets/svgs/logoNotFound.svg';
import { observer } from 'mobx-react-lite';
import { FC, memo } from 'react';
import { View, Text } from 'react-native';
import { useDualityStore } from 'stores/appStoreContext';
import useGeneralComponentStyles from 'styles/useGeneralComponentStyles';

import styles from './styles';

type Data = {
    [key: string]: JSX.Element;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const data: Data = {
    Eth: <EthLogo />,
    Usdt: <UsdtLogo />,
    '': <LogoNotFound />,
};

type ComponentProps = {
    cryptoName: string;
};

const ShortInfoCryptoBalance: FC<ComponentProps> = ({ cryptoName }) => {
    const { valueSmall, valueBig, title } = useGeneralComponentStyles();

    const { cryptoCurrencyFullInfo } = useDualityStore();
    const item = cryptoCurrencyFullInfo[cryptoName][0];

    return (
        <View style={[styles.section]}>
            <View style={styles.logoContainer}>{item.logoSvgSmall()}</View>
            <View style={styles.flex}>
                <Text style={[valueSmall, styles.cryptoName]}>
                    {cryptoName.toUpperCase()}
                </Text>
                <Text style={[title, styles.tinyFontSize]}>{cryptoName}</Text>
            </View>
            <View style={styles.values}>
                <Text style={[valueBig, styles.valueCrypto]}>23,000.00</Text>
                <Text style={[title, styles.valueDollar]}>21 727,23 $</Text>
            </View>
        </View>
    );
};

export default memo(observer(ShortInfoCryptoBalance));
