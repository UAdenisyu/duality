import { observer } from "mobx-react-lite";
import { Button, Pressable, SafeAreaView, Text, View } from "react-native";
import { useDualityStore } from "../../mobx/appStoreContext";

const Login = () => {

  const { setIsLoggedIn } = useDualityStore();

  //use LinearGradient for background colors

  return (
    <SafeAreaView>
      <Text>Login Page</Text>
      <View style={{width: 100, height: 100, backgroundColor: 'green'}}></View>
      <Button
        onPress={() => setIsLoggedIn(true)}
        title='Login'
      />
    </SafeAreaView>
  );
}

export default observer(Login);