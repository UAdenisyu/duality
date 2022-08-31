import { View, Text } from "react-native";
import styles from './styles';
import Arrow from '../../assets/svgs/arrow.svg';

export default function TableListItem({ backgroundColor } : { backgroundColor : string }) {
    return (
        <View style={{...styles.container, backgroundColor: backgroundColor}}>
            <Text style={styles.income}>25,38%</Text>
            <Text style={styles.price}>1200</Text>
            <View style={styles.date}>
                <Text style={styles.date.mytextColor}>2022-07-08</Text>
                <Arrow color='#E2FF9D' style={styles.arrow}/>
            </View>
        </View>
    );
}