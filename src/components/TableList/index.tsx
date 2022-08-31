import { View, Text } from "react-native";
import styles from './styles';
import TableListItem from '../TableListItem';

type dataType = { incomePerYear: number; targetPrice: number; completionTime: Date }[];
const dataSample: dataType = [
    {
        incomePerYear: 25.38,
        targetPrice: 1200,
        completionTime: new Date(),
    },
    {
        incomePerYear: 25.38,
        targetPrice: 1200,
        completionTime: new Date(),
    },
    {
        incomePerYear: 25.38,
        targetPrice: 1200,
        completionTime: new Date(),
    },
    {
        incomePerYear: 25.38,
        targetPrice: 1200,
        completionTime: new Date(),
    },
]


export default function TableList() {
    const items = dataSample.map((item, i) => <TableListItem key={Math.random()} backgroundColor={i % 2 ? '#202226' : '#34363A'}/>);
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