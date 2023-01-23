import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react-lite";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import useThemeColors from '../../hooks/useThemeColors';
import generalComponentStyles from '../../styles/generalComponentStyles';

import DualityLogo from '../../assets/svgs/duality.svg';
import { useDualityStore } from "../../mobx/appStoreContext";

const GetStarted = () => {
  const { markedItemBackgroundColor, plainTextColor, markedTextColor } = useThemeColors();
  const generalStyles = generalComponentStyles();
  
  const navigation = useNavigation();

  const { setIsLoggedIn } = useDualityStore();

  const loginPressed = () => {
    setIsLoggedIn(true);
    navigation.navigate("Login");
  }

  const signUpPressed = () => {
    navigation.navigate('NotFound');
  }

  return (
    <SafeAreaView style={styles.screenWrapper}>
      <View style={styles.previewWrapper}>
        <View style={styles.dualityLogo}>
          <DualityLogo/>
        </View>
        <View style={styles.demoScreenhotsWrapper}>
          <View style={styles.screenshot1}>
            <Image source={require('../../assets/images/demoScreenshot1.png')}/>
          </View>
          <View style={styles.screenshot2}>
            <Image source={require('../../assets/images/demoScreenshot2.png')}/>
          </View>
        </View>
      </View>
      <View style={styles.mainPartWrapper}>
        <Text style={[plainTextColor, styles.screenTitle]}>
          Start your crypto portfolio
        </Text>
        <Pressable 
          style={[markedItemBackgroundColor, styles.getStartedButton]} 
          onPress={signUpPressed}>
          <Text style={styles.getStartedButtonText}>
            Get started
          </Text>
        </Pressable>
        <Pressable 
          style={styles.loginLink} 
          onPress={loginPressed}>
          <Text style={generalStyles.titleLight}>
            Already have an account?{' '}
          </Text>
          <Text style={[generalStyles.titleLight, markedTextColor]}>
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default observer(GetStarted);

const styles = StyleSheet.create({
  screenWrapper: {
    backgroundColor: '#0E1015', 
    height: '100%',
    justifyContent: 'space-between',
  },
  previewWrapper: {
    backgroundColor: '#0A84FF',
    borderRadius: 20,
    margin: 8,
  },
  dualityLogo: {
    marginTop: 77,
    marginBottom: 50,
    alignItems: 'center',
  },
  demoScreenhotsWrapper:{
    marginHorizontal: 32,
    flexDirection: 'row',
  },
  screenshot1:{
    zIndex: 4,
  },
  screenshot2:{
    marginLeft: '-10%',
    zIndex: 3,
    alignSelf: 'flex-end',
  },
  mainPartWrapper: {
    marginHorizontal: 24,
    marginBottom: 40,
  },
  screenTitle: {
    fontFamily: 'trap-semibold',
    fontSize: 40,
    marginRight: 30,
  },
  getStartedButton: {
    width: '100%',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 34,
  },
  getStartedButtonText: {
    fontFamily: 'trap-semibold',
    fontSize: 16,
  },
  loginLink: {
    flexDirection: 'row',
    marginTop: 24,
  },
});