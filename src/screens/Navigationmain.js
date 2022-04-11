import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../component/Drawer_coponent/CustomDrawer";

// * Import Screens * //
import Home from "./Home";
import Add from "./CRUD_Garden/Add";
import Store from "./Store";
import Notification from "./Notification";
import Setting from "./Setting"
import Update from "./CRUD_Garden/Update";


import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

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

<RootStack.Screen
        name="แก้ไข"
        component={Update}
        
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
        drawerActiveBackgroundColor:'#3b5360',
        drawerActiveTintColor:'#FFF',
        drawerLabelStyle:{
          fontFamily:'HAIDUO1T',
          marginLeft:-25,
          fontSize: 18
        }
      }}
      drawerContent={(props) => <CustomDrawer {...props} email={data} />}
    >
      <Drawer.Screen
        name="Home"
        component={RootStackScreen}
        initialParams={{ email: data }}
        options={{
          drawerIcon: ({color}) => ( <Ionicons name="home" size={22} color={color} />)
        }}
      />
      <Drawer.Screen
        name="Store"
        component={Store}
        options={{
          drawerIcon: ({color}) => ( <Entypo name="shop" size={22} color={color} />)
        }}
      />

<Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          drawerIcon: ({color}) => ( <Ionicons name="notifications" size={22} color={color} />)
        }}
      />

<Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({color}) => ( <Ionicons name="options" size={22} color={color} />)
        }}
      />

    </Drawer.Navigator>
  );
};

export default Navigationmain;
