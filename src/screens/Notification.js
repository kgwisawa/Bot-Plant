import { View, Text,SafeAreaView ,StyleSheet,Image} from 'react-native'
import React from 'react'
import textStyle from '../style/text-style'

import Ionicons from 'react-native-vector-icons/Ionicons'


const Notification = () => {
  return (
    <SafeAreaView style={styles.content}>
    <View style={styles.screen}>
      <View style={styles.title}>
        <View style={styles.left_title}>
            <Ionicons size={30} color="white" name="notifications" />
          <Text style={[textStyle.title,{marginLeft:5}]}>Notification</Text>
          {/* <Text style={[textStyle.title_detail]}>your garden </Text> */}
        </View>
        <View style={styles.rigth_title}>
          <Image
            style={styles.Logo}
            source={require("../../assets/icon/icon_drawer/logo_botplant.png")}
          />
        </View>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={textStyle.optional}>ยังไม่มีการแจ้งเตือน</Text>
      </View>
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
export default Notification