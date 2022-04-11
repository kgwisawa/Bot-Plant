import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../component/Drawer_coponent/CustomDrawer";

// * Import Screens * //
import Home from "./Home";
import Add from "./CRUD_Garden/Add";
import Store from "./Store";

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function RootStackScreen({ route, navigation }) {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3b5360",
        },
        headerTintColor: "#fff",
        headerBackTitleStyle:{
          fontFamily:'HAIDUO1T'
        },
        headerTitleStyle:{
          fontFamily:'Opun_Regular'
        }
      }}
    >
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
        initialParams={{ email: route.params.email }}
      />

  <RootStack.Screen
        name="เพิ่มต้นไม้"
        component={Add}
        
      />
    </RootStack.Navigator>
  );
}

const Navigationmain = (props) => {
  // * State variable * //
  const [data, setdata] = useState(props.email);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawer {...props} email={data} />}
    >
      <Drawer.Screen
        name="Home"
        component={RootStackScreen}
        initialParams={{ email: data }}
      />
      <Drawer.Screen
        name="Store"
        component={Store}
      />

    </Drawer.Navigator>
  );
};

export default Navigationmain;
