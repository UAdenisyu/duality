import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';

import NumberFormat from 'react-number-format';

const TotalBalance = observer(() => {
    const { totalBalance } = useCounterStore();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Total balance:</Text>
            <View style={styles.body}>
                <NumberFormat
                    value={totalBalance.toFixed(2)}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={(value) => <Text style={styles.numbers}>{value}</Text>}
                />
                <Text style={styles.currencyName}>USDT</Text>
            </View>
        </View>
    );
});

export default TotalBalance;
