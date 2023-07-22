import { useNavigation } from '@react-navigation/native';
import OpenBiomethricsButton from 'components/OpenBiomethricsButton';
import sleep from 'helpers/sleep';
import useThemeColors from 'hooks/useThemeColors';
import { observer } from 'mobx-react-lite';
import { FC, useState } from 'react';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Alert,
} from 'react-native';
import { useAuthStore, useSettingsStore } from 'stores/appStoreContext';
import { RootStackNavigationProp } from 'types/navigationStacks';

//use LinearGradient for background colors

const Login: FC = () => {
    const { toggleLoading, setIsLoggedIn, registeredUsers } = useAuthStore();
    const { faceIdEnabled } = useSettingsStore();
    const navigation = useNavigation<RootStackNavigationProp>();
    const { markedItemBackgroundColor, inputColors, inputBorderColor } =
        useThemeColors();

    const [inputUserName, setInputUserName] = useState('Demo Trader 1');
    const [inputPassword, setInputPassword] = useState('trademe1');

    type checkFunction = () => Promise<boolean>;

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
                style={[markedItemBackgroundColor, styles.button]}
                onPress={loginPressed}>
                <Text style={styles.getStartedButtonText}>Login</Text>
            </Pressable>
            <Pressable
                style={[markedItemBackgroundColor, styles.button]}
                onPress={signUpPressed}>
                <Text style={styles.getStartedButtonText}>Sign Up</Text>
            </Pressable>
            {faceIdEnabled && (
                <OpenBiomethricsButton onSuccess={loginPressed} />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screenWrapper: {
        marginHorizontal: 24,
        height: '100%',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 32,
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
        marginTop: 32,
        paddingTop: 12,
    },
    availableValue: {
        fontFamily: 'poppins-semibold',
        fontSize: 16,
    },
});

export default observer(Login);
