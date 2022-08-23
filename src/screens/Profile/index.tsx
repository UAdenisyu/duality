import {Text, View, StyleSheet } from 'react-native';
export default function Profile() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile page</Text>
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
        fontWeight: 'bold',
    }
});
