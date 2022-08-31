import { View, Text, StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
    container: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        justifyContent: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.07)",
        borderRadius: 24,
        flexDirection: 'column',
    },
    body: {
        flexDirection: 'row',
        marginTop: 2,
    },
    title:{
        color: '#767676',
        // font-family: 'Poppins';
        // font-style: normal;
        fontWeight: '400',
        fontSize: 14,
    },
    numbers: {
        color: '#FFFFFF',
        // font-family: 'Poppins';
        // font-style: normal;
        fontWeight: '600',
        fontSize: 24,
    },
    currencyName: {
        color: '#767676',
        marginLeft: 7,
        textAlignVertical: 'center',
    }
});