import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useCounterStore } from '../../mobx/stores/AppStore.store';

import useThemeColors from "../../hooks/useThemeColors";

import NumberFormat from 'react-number-format';
import CommonComponentStyles from "../../styles/CommonComponentStyles";

const TotalBalance = observer(() => {

    const { totalBalance } = useCounterStore();
    const { wrapper, title, valueBig, cryptoName } = CommonComponentStyles();

    return (
        <View style={wrapper}>
            <Text style={title}>Total balance:</Text>
            <View style={styles.body}>
                <NumberFormat
                    value={totalBalance.toFixed(2)}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={(value) => <Text style={valueBig}>{value}</Text>}
                />
                <Text style={cryptoName}>USDT</Text>
            </View>
        </View>
    );
});

export default TotalBalance;
