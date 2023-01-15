import { SafeAreaView, StyleSheet, Text, View } from "react-native";

//usex LinearGradient for background colors

const Loading = () => {

  return (
    <SafeAreaView style={styles.screenWrapper}>
      <Text>Loading, please wait</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    marginHorizontal: 24,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Loading;