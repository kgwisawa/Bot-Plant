import { View, Text } from "react-native";
import React, { useState } from "react";
import Home from "./Home";

import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "../component/Drawer_coponent/CustomDrawer";


const Drawer = createDrawerNavigator();


const Navigationmain = ( props ) => {
  const [data,setdata] = useState(props.email);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}

      drawerContent={props => <CustomDrawer {...props} email={data}  />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        initialParams={{ email: data}}
      />
      <Drawer.Screen name="Notifications" component={Home} />
    </Drawer.Navigator>
  );
};

export default Navigationmain;
