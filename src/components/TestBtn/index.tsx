import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { observer } from 'mobx-react-lite';


import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';

export const TestBtn = observer(() => {
    const { totalBalance, setTotalBalance } = useCounterStore(); // OR useContext(CounterStoreContext)
    return (
        <View style={styles.container}>
            <Pressable onPress={() => setTotalBalance(totalBalance + 1)}>
                <Text style={{ color: 'white', fontSize: 20 }}>{totalBalance}</Text>
            </Pressable>
        </View>
    );
});
