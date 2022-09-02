import { View, Text } from "react-native";
import styles from "./styles";

export default function TotaLBalance() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Total balance:</Text>
            <View style={styles.body}>
                <Text style={styles.numbers}>$23,000.00</Text>
                <Text style={styles.currencyName}>USDT</Text>
            </View>
        </View>
    );
}

