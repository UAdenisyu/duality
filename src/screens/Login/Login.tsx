import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View, TextInput, Alert } from "react-native";
import useThemeColors from "../../hooks/useThemeColors";
import { useDualityStore } from "../../mobx/appStoreContext";
import generalComponentStyles from "../../styles/generalComponentStyles";
import Loading from "../Loading";

  //use LinearGradient for background colors

const Login = () => {

  const { isLoading, toggleLoading, isLoggedIn, setIsLoggedIn, registeredUsers } = useDualityStore();
  const navigation = useNavigation();
  const {markedItemBackgroundColor, inputColors, inputBorderColor} = useThemeColors();

  const [inputUserName, setInputUserName] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  type checkFunction = () => boolean

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const checkIfUserRegistered: checkFunction = () => {
    return registeredUsers.some(user => user.userName === inputUserName && user.password === inputPassword);
  }

  const loginPressed = async () => {
    toggleLoading(true);
    if (checkIfUserRegistered()) {
      await sleep(4000);
      navigation.navigate('Root');
      setIsLoggedIn(true);
    } else {
      console.log(inputUserName);
      console.log(inputPassword);
      Alert.alert('Wrong username or password');
      setIsLoggedIn(false);
    }
    toggleLoading(false);
  }

  const signUpPressed = () => {
    navigation.navigate('NotFound');
  }

  if (isLoading) {
    return <Loading/>
  }

  return (
    <SafeAreaView style={styles.screenWrapper}>
      <TextInput
        value={inputUserName}
        onChangeText={setInputUserName}
        style={[styles.inputArea, styles.availableValue, inputColors]}
        selectionColor={inputBorderColor.borderColor}/>
      <TextInput
        value={inputPassword}
        onChangeText={setInputPassword}
        style={[styles.inputArea, styles.availableValue, inputColors]}
        selectionColor={inputBorderColor.borderColor}/>
      <Pressable style={[markedItemBackgroundColor, styles.getStartedButton]} onPress={loginPressed}>
        <Text style={styles.getStartedButtonText}>
          Login
        </Text>
      </Pressable>
      <Pressable style={[markedItemBackgroundColor, styles.getStartedButton]} onPress={signUpPressed}>
        <Text style={styles.getStartedButtonText}>
          Sign Up
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

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
  availableValue:{
    fontFamily: 'poppins-semibold',
    fontSize: 16,
  },
});

export default observer(Login);