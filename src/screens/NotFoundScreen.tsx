import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { RootStackNavigationProp } from 'types/navigationStacks';

//TODO: make this screen more custom.

function NotFoundScreen() {
    const navigation = useNavigation<RootStackNavigationProp>();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This screen doesn't exist.</Text>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.link}>
                <Text style={styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default observer(NotFoundScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
