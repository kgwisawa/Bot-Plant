import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import textStyle from "../style/text-style";


const Home = ({ navigation, route }) => {

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.title}>
        <View style={styles.left_title}>
          <Text style={[textStyle.title]}>Welcome  </Text>
        </View>
        <View style={styles.rigth_title}>
        <Image
          style={styles.Logo}
          source={require("../../assets/icon/logo_botplant.png")}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    height: "100%",
    width: "100%",
  },
  title: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  rigth_title: {
    height: 50,
    width: "30%",
    justifyContent: "center",
    alignItems:'flex-end',
    paddingRight:10
  },
  left_title: {
    height: 50,
    width: "70%",
    justifyContent: "center",
    paddingLeft:10
  },
  Logo: {
    width:50,
    height:50
  },
});

export default Home;
