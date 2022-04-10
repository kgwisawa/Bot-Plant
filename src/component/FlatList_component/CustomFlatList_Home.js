import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

import textStyle from "../../style/text-style";
import Ionicons from 'react-native-vector-icons/Ionicons'

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const CustomFlatList_Home = () => {
  const Item = ({ title }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{title}</Text> */}
      <View style={styles.head}>
        <Image
          style={styles.Logo_plant}
          source={require("../../../assets/icon/icon_plant/test.jpeg")}
        />
      </View>

      {/* <Image
        style={styles.ridge}
        source={require("../../../assets/icon/icon_plant/ridge.png")}
      /> */}

      <View style={styles.mid}>
        <View style={{ width: "100%", height: "50%" ,justifyContent:'center'}}>
          <Text style={textStyle.title_flat}>ping ping</Text>
          <Text style={textStyle.title_flat_type}>(กระบองทอง)</Text>
          {/* <Text style={textStyle.title_flat_dashboard}>dashboard</Text> */}
        </View>
        <View style={{ width: "100%", height: "50%" ,flexDirection:'row'}}>

          <View style={styles.display_day}>
          <Ionicons size={25} color="white" name="today-sharp" />
            <Text style={textStyle.display_flat}>15 day</Text>
          </View>

          <View style={styles.display_light}>
          <Ionicons size={25} color="white" name="sunny" />
            <Text style={textStyle.display_flat}>150 lux</Text>
          </View>

          <View style={styles.display_humi}>
          <Ionicons size={25} color="white" name="water" />
            <Text style={textStyle.display_flat}>75 %</Text>
          </View>
        </View>
      </View>

      <View style={styles.tail} >
      <View style={{justifyContent:'center',alignItems:'center',marginTop:5}}>
      <Ionicons size={25} color="#FFF" name="options"  />
      <Text style={textStyle.display_flat_edit}>แก้ไข</Text>
      </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={{ height: "100%", width: "100%", alignItems: "center" }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    marginVertical: 8,
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
      borderRadius: 10,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  head: {
    width: "35%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'#000'
  },
  mid: {
    width: "50%",
    height: 150,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 5,
    paddingLeft: 10,
    paddingTop: 0
    // backgroundColor:'#000'
  },
  tail: {
    width: "15%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#5ca78c',
    borderTopRightRadius:10,
    borderBottomRightRadius:10
  },
  Logo_plant: {
    height: 110,
    width: 110,
    backgroundColor: "green",
    borderRadius: 100,
  },
  ridge: {
    height: 150,
    width: 35,
    // backgroundColor:'#000'
  },
  display_day: {
    width: "30%",
    height: "90%",
    backgroundColor: "#eb144c",
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:-5,
    marginRight:5
  },
  display_light: {
    width: "30%",
    height: "90%",
    backgroundColor: "#fcb900",
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:-5,
    marginRight:5
  },
  display_humi: {
    width: "30%",
    height: "90%",
    backgroundColor: "#0693e3",
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:-5
  },
});

export default CustomFlatList_Home;
