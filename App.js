import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  LogBox,
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { auth } from "./src/service/firebase";
import React, { useEffect, useState } from "react";

// * Import Style-text * //
import textStyle from "./src/style/text-style";

// * Import Screens * //
import Navigationlogin from "./src/login/Navigationlogin";
import Navigationmain from "./src/screens/Navigationmain";

export default function App() {
  // * State variable * //
  const [User, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ? IgnoreLogs ? //
    LogBox.ignoreLogs([""]);

    // ? Start App Check user Iogin ? //
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // ? Set Fonts ? //
  let [fontsLoaded] = useFonts({
    HAIDUO1H: require("./assets/fonts/HAIDUO1H.ttf"),
    HAIDUO1T: require("./assets/fonts/HAIDUO1T.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {User ? <Navigationmain email={User.email} /> : <Navigationlogin />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
