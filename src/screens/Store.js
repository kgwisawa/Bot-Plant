import { View, Text ,SafeAreaView,Image,StyleSheet} from 'react-native'
import textStyle from '../style/text-style'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";

import CustomFlatList_Store from '../component/FlatList_component/CustomFlatList_Store';
const Store = () => {
  return (
    <SafeAreaView style={styles.content}>
    <View style={styles.screen}>
      <View style={styles.title}>
        <View style={styles.left_title}>
            <Entypo size={30} color="white" name="shop" />
          <Text style={[textStyle.title,{marginLeft:5}]}>Store</Text>
          {/* <Text style={[textStyle.title_detail]}>your garden </Text> */}
        </View>
        <View style={styles.rigth_title}>
          <Image
            style={styles.Logo}
            source={require("../../assets/icon/icon_drawer/logo_botplant.png")}
          />
        </View>
      </View>
                <CustomFlatList_Store/>
        </View>
    </SafeAreaView>
  )
}
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
      alignItems: "center",
      paddingLeft: 10,
      flexDirection:'row'
    },
    Logo: {
      width: 50,
      height: 50,
    },
  });
export default Store