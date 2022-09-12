import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import useThemeColors from "../../hooks/useThemeColors";

import NumberFormat from 'react-number-format';

const TotalBalance = observer(() => {
    const { totalBalance } = useCounterStore();

    const { grey, commonText } = useThemeColors();

    return (
        <View style={styles.container}>
            <Text style={[styles.title, {color: grey}]}>Total balance:</Text>
            <View style={styles.body}>
                <NumberFormat
                    value={totalBalance.toFixed(2)}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={(value) => <Text style={[styles.numbers, {color: commonText}]}>{value}</Text>}
                />
                <Text style={[styles.currencyName, {color: grey}]}>USDT</Text>
            </View>
        </View>
    );
});

export default TotalBalance;
