import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import textStyle from "../style/text-style";

import CustomFlatList_Home from "../component/FlatList_component/CustomFlatList_Home";

const Home = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.content}>
    <View style={styles.screen}>
      <View style={styles.title}>
        <View style={styles.left_title}>
          <Text style={[textStyle.title]}>Welcome to</Text>
          <Text style={[textStyle.title_detail]}>your garden</Text>
        </View>
        <View style={styles.rigth_title}>
          <Image
            style={styles.Logo}
            source={require("../../assets/icon/icon_drawer/logo_botplant.png")}
          />
        </View>
      </View>
      
        <CustomFlatList_Home/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    height: "90%",
    width: "100%",
    backgroundColor:"#3b5360"
  },
  screen:{
    height: "100%",
    width: "100%",
    backgroundColor:"#f5f5f5"
  },
  title: {
    height: 55,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor:"#3b5360"
  },
  rigth_title: {
    height: 50,
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10
  },
  left_title: {
    height: 50,
    width: "70%",
    justifyContent: "center",
    paddingLeft: 10,
  },
  Logo: {
    width: 50,
    height: 50,
  },
});

export default Home;
