import { View, Text } from "react-native";
import styles from './styles';
import TableListItem from './listItem';
import { useCounterStore, CounterStoreContext } from '../../mobx/stores/AppStore.store';
import CommonComponentStyles from "../../styles/CommonComponentStyles";
import useThemeColors from "../../hooks/useThemeColors";


export default function TableList({ target }: { target: string }) {

    const { lightGrey, extraDark } = useThemeColors();
    const { cryptoCurrencyFullInfo } = useCounterStore();
    const items = cryptoCurrencyFullInfo[target].map((item, i) => <TableListItem key={Math.random()} backgroundColor={i % 2 ? extraDark : '#34363A'} data={item}/>);

    const { wrapper, markeredText } = CommonComponentStyles();

    return (
        <View style={[wrapper, styles.container]}>
            <View style={styles.headerWrapper}>
                <Text style={[styles.headerText, {color: lightGrey}]}>% Per year</Text>
                <Text style={[styles.headerText, {color: lightGrey}]}>Target price</Text>
                <Text style={[styles.headerText, {color: lightGrey}]}>Completion time</Text>
            </View>
            {items}
        </View>
    );
}