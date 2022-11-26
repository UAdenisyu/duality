import { View } from "react-native";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import ShortInfoCryptoBalance from './ShortInfoCryptoBalance';
import generalComponentStyles from "../../styles/generalComponentStyles";


const UserShortInfoBalanceList = () => {
    const { cryptoCurrencyFullInfo } = useCounterStore();
    const { wrapper, borderedSection } = generalComponentStyles();

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
};

export default observer(UserShortInfoBalanceList);
