import { View } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import ListItem from './ListItem';
import generalComponentStyles from "../../styles/generalComponentStyles";

const TotalBalanceListDetails = () => {
    const { cryptoCurrencyFullInfo } = useCounterStore();

    const componentStyles = generalComponentStyles();

    const cryptoNames = Object.keys(cryptoCurrencyFullInfo);
    // TODO: add useMemo
    return (
        <View style={[componentStyles.wrapper, styles.container]}>
            {cryptoNames.map((cryptoName, i) => (
                <ListItem key={cryptoName} cryptoName={cryptoName} bottomBorder={i + 1 < cryptoNames.length}/>
            ))}
        </View>
    );
};

export default observer(TotalBalanceListDetails);
