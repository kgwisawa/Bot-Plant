import { View, Text , ActivityIndicator} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// * Import Screens * //
import Signin from "./Signin";
import Signup from "./Signup";

const Stack = createNativeStackNavigator();

const Navigationlogin = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default Navigationlogin;
