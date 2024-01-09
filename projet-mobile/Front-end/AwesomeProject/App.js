import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "../../Front-end/AwesomeProject/component/Header/Header";
import { Input } from "./component/Input/Input";
import { Button } from "./component/Button/Button";
import parisBackground from "./assets/paris1.jpeg";

export default function App() {
  return (
    <ImageBackground source={parisBackground} style={s.imgbg}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={s.header}>
            <Header />
            <Input />
            <Button />
          </View>

          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    alignItems: "center",
    justifyContent: "center",
  },
});
