import { View, Text } from "react-native";
import styles from './styles';
import TableListItem from './TableListItem';
import { useCounterStore } from '../../mobx/stores/AppStore.store';
import generalComponentStyles from "../../styles/generalComponentStyles";
import useThemeColors from "../../hooks/useThemeColors";

type Props = {
    target: string,
}

export default function TableList({ target }: Props) {

    const { tableColumnTitleColor, darkTextColor } = useThemeColors();
    const { cryptoCurrencyFullInfo } = useCounterStore();
    const items = cryptoCurrencyFullInfo[target].map((item, i) => (
        <TableListItem key={Math.random()} backgroundColor={i % 2 ? darkTextColor.color : '#34363A'} data={item}/>
    ));

    const { wrapper } = generalComponentStyles();

    const columnTitle = (textContent: string) => (
        <Text style={[styles.headerText, tableColumnTitleColor]}>{textContent}</Text>
    );

    return (
        <View style={[wrapper, styles.container]}>
            <View style={styles.headerWrapper}>
                {columnTitle('% Per year')}
                {columnTitle('Target price')}
                {columnTitle('Completion time')}
            </View>
            {items}
        </View>
    );
}