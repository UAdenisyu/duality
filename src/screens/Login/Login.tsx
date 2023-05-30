import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Alert,
} from 'react-native';

import useThemeColors from '../../hooks/useThemeColors';
import { useDualityStore } from '../../mobx/appStoreContext';

//use LinearGradient for background colors

const Login = () => {
    const { toggleLoading, setIsLoggedIn, registeredUsers } = useDualityStore();
    const navigation = useNavigation();
    const { markedItemBackgroundColor, inputColors, inputBorderColor } =
        useThemeColors();

    const [inputUserName, setInputUserName] = useState('Demo Trader 1');
    const [inputPassword, setInputPassword] = useState('trademe1');

    type checkFunction = () => Promise<boolean>;

    const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    const checkIfUserRegistered: checkFunction = async () => {
        // api fetch simulation. async actions
        return registeredUsers.some(
            (user) =>
                user.userName === inputUserName &&
                user.password === inputPassword
        );
    };

    const loginPressed = async () => {
        toggleLoading(true);
        await sleep(100); // wait untill animation starts
        const isUserExists = await checkIfUserRegistered();
        if (isUserExists) {
            setIsLoggedIn(true);
            navigation.reset({
                index: 0,
                routes: [{ name: 'Root' }],
            });
            await sleep(100); // wait untill animation finishes
        } else {
            console.log(inputUserName);
            console.log(inputPassword);
            Alert.alert('Wrong username or password');
        }
        toggleLoading(false);
    };

    const signUpPressed = () => {
        navigation.navigate('NotFound');
    };

    return (
        <SafeAreaView style={styles.screenWrapper}>
            <TextInput
                value={inputUserName}
                onChangeText={setInputUserName}
                style={[styles.inputArea, styles.availableValue, inputColors]}
                selectionColor={inputBorderColor.borderColor}
            />
            <TextInput
                value={inputPassword}
                onChangeText={setInputPassword}
                style={[styles.inputArea, styles.availableValue, inputColors]}
                selectionColor={inputBorderColor.borderColor}
            />
            <Pressable
                style={[markedItemBackgroundColor, styles.getStartedButton]}
                onPress={loginPressed}>
                <Text style={styles.getStartedButtonText}>Login</Text>
            </Pressable>
            <Pressable
                style={[markedItemBackgroundColor, styles.getStartedButton]}
                onPress={signUpPressed}>
                <Text style={styles.getStartedButtonText}>Sign Up</Text>
            </Pressable>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screenWrapper: {
        marginHorizontal: 24,
        height: '100%',
        justifyContent: 'center',
    },
    getStartedButton: {
        width: '100%',
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 16,
    },
    getStartedButtonText: {
        fontFamily: 'trap-semibold',
        fontSize: 16,
    },
    inputArea: {
        borderWidth: 1,
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 32,
        marginVertical: 16,
        paddingTop: 12,
    },
    availableValue: {
        fontFamily: 'poppins-semibold',
        fontSize: 16,
    },
});

export default observer(Login);
