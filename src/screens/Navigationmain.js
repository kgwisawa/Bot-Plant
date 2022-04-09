import { View, Text } from "react-native";
import React, { useState } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../component/Drawer_coponent/CustomDrawer";

// * Import Screens * //
import Home from "./Home";


const Drawer = createDrawerNavigator();


const Navigationmain = ( props ) => {
  // * State variable * //
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
