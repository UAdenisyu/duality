import { View,Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';
import useThemeColors from "../../hooks/useThemeColors";

import ShortInfoCryptoBalance from './ShortInfoCryptoBalance';
import CommonComponentStyles from "../../styles/CommonComponentStyles";


const UserShortInfoBalanceList = observer(() => {
    const { cryptoCurrencyFullInfo } = useCounterStore();
    const { wrapper, borderedSection } = CommonComponentStyles();

    const cryptoNames = Object.keys(cryptoCurrencyFullInfo);

    const cryptoCurrencyList = cryptoNames.map((cryptoName, i) => (
        <View key={cryptoName} style={[ i + 1 >= cryptoNames.length ? null : borderedSection, i === 0 ? null : {paddingTop: 16}]}>
            <ShortInfoCryptoBalance cryptoName={cryptoName}/>
        </View>
    ));

    return (
        <View style={wrapper}>
            {cryptoCurrencyList}
        </View>
    );
});

export default UserShortInfoBalanceList;
