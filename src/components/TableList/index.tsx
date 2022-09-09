import { View, Text } from "react-native";
import styles from './styles';
import TableListItem from './listItem';
import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';


export default function TableList({ target }: {target: string}) {
    const { cryptoCurrencyFullInfo } = useCounterStore();
    const items = cryptoCurrencyFullInfo[target].map((item, i) => <TableListItem key={Math.random()} backgroundColor={i % 2 ? '#202226' : '#34363A'} data={item}/>);
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>% Per year</Text>
                <Text style={styles.headerText}>Target price</Text>
                <Text style={styles.headerText}>Completion time</Text>
            </View>
            {items}
        </View>
    );
}