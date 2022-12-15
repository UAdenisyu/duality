import { View, Text } from "react-native";
import styles from "./styles";

import { observer } from 'mobx-react-lite';
import { useDualityStore } from '../../mobx/appStoreContext';

import NumberFormat from 'react-number-format';
import generalComponentStyles from "../../styles/generalComponentStyles";

const TotalBalance = () => {
    const dualityStore = useDualityStore();
    const { wrapper, title, valueBig, cryptoName } = generalComponentStyles();

    return (
        <View style={wrapper}>
            <Text style={title}>Total balance:</Text>
            <View style={styles.body}>
                <NumberFormat
                    value={dualityStore.totalBalance}
                    displayType="text"
                    thousandSeparator
                    prefix="$"
                    renderText={(value) => <Text style={valueBig}>{value}</Text>}
                />
                <Text style={cryptoName}>USDT</Text>
            </View>
        </View>
    );
};

export default observer(TotalBalance);
