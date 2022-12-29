import { View } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useDualityStore } from '../../mobx/appStoreContext';

import ListItem from './ListItem';
import generalComponentStyles from "../../styles/generalComponentStyles";

const TotalBalanceListDetails = () => {
    const { cryptoCurrencyFullInfo } = useDualityStore();

    const {wrapper} = generalComponentStyles();

    const cryptoNames = Object.keys(cryptoCurrencyFullInfo);

    return (
        <View style={[wrapper, styles.container]}>
            {cryptoNames.map((cryptoName, i) => (
                <ListItem key={cryptoName} cryptoName={cryptoName} bottomBorder={i + 1 < cryptoNames.length}/>
            ), [cryptoNames])}
        </View>
    );
};

export default observer(TotalBalanceListDetails);
