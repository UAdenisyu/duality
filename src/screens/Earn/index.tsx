import {  Text, View , StyleSheet } from 'react-native';

export default function Earn() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Earn page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
});
