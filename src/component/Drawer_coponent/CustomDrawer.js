import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  NativeModules
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import { db } from "../../service/firebase";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../../service/firebase";

import textStyle from "../../style/text-style";

const CustomDrawer = (props) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");


    const reSet = () => {
      NativeModules.DevSettings.reload();
    }

  const handleSignOut = () => {
    auth
    .signOut()
    .then(() => {
      alert("Signed Out!");
      reSet();
    })
    .catch((error) => {
      alert(error);
    });
  }

  
  useEffect(() => {
    // Update the document title using the browser API
    getinfo_firebase();
  },[]);

  const getinfo_firebase = () => {
    const myDoc = doc(db, "User", props.email);
    getDoc(myDoc)
      // Handling Promises
      .then((snapshot) => {
        // MARK: Success
        if (snapshot.exists) {
          setfirstname(snapshot.data().firstname);
          setlastname(snapshot.data().lastname);
        } else {
          alert("No Doc Found");
        }
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.contentinfo}>
        <View style={{ flexDirection: "row", width: "100%", height: "100%" }}>
          <View style={styles.left_title}>
            <Image
              style={styles.Logoprofile}
              source={require("../../../assets/icon/icon_drawer/profile.png")}
            />
          </View>

          <View style={styles.rigth_title}>
            <Text style={textStyle.title_drawer}>{firstname}</Text>
            <Text style={textStyle.title_drawer}>{lastname}</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", height: 20 }}
            >
              <Image
                style={styles.Logo}
                source={require("../../../assets/icon/icon_drawer/gmail.png")}
              />
              <Text style={textStyle.email_drawer}> {props.email}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#FFF", paddingTop: 10 }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
        }}
      >
        <TouchableOpacity
          onPress={() =>  handleSignOut()}
          style={styles.logout}
        >
        <Icon size={25} color="white" name="logout" />
          <Text style={[textStyle.login, { color: "#FFF",marginTop:-5 }]}> Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentinfo: {
    height: "25%",
    width: "100%",
    backgroundColor: "#3b5360",
  },
  rigth_title: {
    height: "100%",
    width: "60%",
    justifyContent: "center",
  },
  left_title: {
    height: "100%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  Logo: {
    height: 14,
    width: 14,
  },
  Logoprofile: {
    height: 80,
    width: 80,
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  logout: {
    backgroundColor: "#5ca78c",
    width: "90%",
    height: 40,
    borderRadius: 10,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row'
  },
});

export default CustomDrawer;
