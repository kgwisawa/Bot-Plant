import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import textStyle from "../../style/text-style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

const CustomFlatList_Store = (props) => {
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState("");
  const [data, setdata] = useState([]);

  const seachFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setsearch(text);
    } else {
      setfilterData(masterData);
      setsearch(text);
    }
  };

  const ShopA = ({ title }) => (
    <View style={styles.item}>
      <Image
        source={title.photo}
        style={{
          width: "100%",
          height: "60%",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      />
      <View
        style={{
          width: "100%",
          height: "60%",
          position: "absolute",
          padding: 10,
        }}
      >
        <Image
          source={{ uri: title.uri }}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
      </View>

      <View style={{ width: "100%", height: "40%", flexDirection: "row" }}>
        <View style={{ width: "70%", height: "100%" }}>
          <View
            style={{
              width: "100%",
              height: "50%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#eb144c",
                borderRadius: 30,
                marginLeft: 5,
              }}
            >
              <Entypo size={20} color="#FFF" name="shop" />
            </View>
            <Text style={textStyle.title_shop_ct}>{title.title}</Text>
            
          </View>
          {/* <Text style={textStyle.title_shop_ct}>#fddf</Text> */}
        </View>

        <View style={{ width: "30%", height: "100%" }}></View>
      </View>
    </View>
  );

//   const tack = ({ item }) => {
//       return ()
//   }

  const rendershopA = ({ item }) => {
    return <ShopA title={item} />;
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <View
        style={{
          height: 80,
          width: "100%",
          alignItems: "center",
          padding: 15,
          flexDirection: "row",
          marginTop: 5,
        }}
      >
        <View
          style={{
            height: 50,
            width: 50,
            justifyContent: "center",
            backgroundColor: "#eef1f4",
            position: "absolute",
            marginLeft: 15,
            borderRadius: 10,
            paddingLeft: 5,
          }}
        >
          <Ionicons size={25} color="#000" name="search" />
        </View>
        <TextInput
          style={styles.txtinput}
          value={search}
          placeholder="ค้นหาตรงนี้..."
          underlineColorAndroid="transparent"
          onChangeText={(text) => seachFilter(text)}
        />
      </View>

      <View style={{ width: "100%", height: "88%" }}>
        <View style={{ width: "100%", height: "50%" }}>
          <Text style={textStyle.store_title}>ร้านขายต้นไม้</Text>

          <FlatList
            data={filter}
            horizontal
            renderItem={rendershopA}
            keyExtractor={(item) => item.name}
          />
        </View>
        <View style={{ width: "100%", height: "50%" }}>
          <Text style={textStyle.store_title}>ร้านขายอุปกรณ์ปลูก</Text>
          <FlatList
            data={filter}
            horizontal
            renderItem={rendershopA}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </View>
  );
};

const filter = [
  {
    uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/60842256_617244702020340_7525831877203066880_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MGBYcfVuM-4AX-UVDd5&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT_Hi61mnOiPKVR6oySEB10BI_NmBhYb6eXuvWleKBz_FA&oe=625A68EE&_nc_sid=9a90d6",
    title: "cactusroooom",
    photo: require('../../../assets/icon/icon_plant/shop/cactusroooom.png'),
    link: "https://www.instagram.com/cactusroooom/"

  },
  {
    uri:'https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/209348748_497217944713669_3451271781482026399_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=sxmdwrUmQWUAX9J56Wn&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9XEFBZ5ElUd7UVRK2BJugtRWKXP1wlYufx2J4KH8oOJg&oe=625A362C&_nc_sid=9a90d6',
    title: "cactusholic_thailand",
    photo: require('../../../assets/icon/icon_plant/shop/cactusholic_thailand.png'),
    link: "https://www.instagram.com/baantonmaiii/"
  },
  {
    uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/104469524_211290549987546_951696892974475868_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=y96gbvZ3_1AAX92MCtv&tn=ZkJ6REJ104mQfOhh&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9oL1BNpn2osVRaDWgP3YrfnOg35M7DhaO6wgaeeiYdtg&oe=625B3650&_nc_sid=9a90d6",
    title: "baantonmaiii",
    photo: require('../../../assets/icon/icon_plant/shop/baantonmaiii.png'),
    link: "https://www.instagram.com/baantonmaiii/"
  },
  {
    uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/143368414_646656432729757_3706765804862470241_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=gV8hXn4lk6gAX8PIyPK&edm=ALQROFkBAAAA&ccb=7-4&oh=00_AT-qbqzdgCFsTxz5GxU5RcKhGrJUxZENd3uZcygwDBIQ_Q&oe=625B4A01&_nc_sid=30a2ef",
    title: "plantneedyou",
    photo: require('../../../assets/icon/icon_plant/shop/plantneedyou.png'),
    link: "https://www.instagram.com/plantneedyou/"
  },
  {
    uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/150270077_125694049442282_3528591211395752215_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=a-YqDLtRLyMAX_UkAzr&edm=ALQROFkBAAAA&ccb=7-4&oh=00_AT-e4opjNSL9yPdZOPEl8zn8EOREhbsAnWnsVHpCUkr8wQ&oe=62597BC5&_nc_sid=30a2ef",
    title: "luckytree_garden",
    photo: require('../../../assets/icon/icon_plant/shop/luckytree_garden.png'),
    link: "https://www.instagram.com/luckytree_garden/"
  },
];
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#eef1f4d9",
    width: 250,
    height: "90%",
    marginVertical: 8,
    borderRadius: 10,
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
    paddingTop: 0,
    // backgroundColor:'#000'
  },
  tail: {
    width: "15%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5ca78c",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  Logo_plant: {
    height: 90,
    width: 90,
  },
  ridge: {
    height: 150,
    width: 35,
    // backgroundColor:'#000'
  },
  display_day: {
    width: "38%",
    height: "90%",
    backgroundColor: "#eb144c",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -5,
    marginRight: 5,
  },
  display_light: {
    width: "27%",
    height: "90%",
    backgroundColor: "#fcb900",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -5,
    marginRight: 5,
  },
  display_humi: {
    width: "27%",
    height: "90%",
    backgroundColor: "#0693e3",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -5,
  },
  txtinput: {
    height: 50,
    width: "74%",
    backgroundColor: "#eef1f4",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Opun_Regular",
    color: "#263238",
    padding: 10,
    paddingLeft: 0,
    marginLeft: 35,
    borderRadius: 10,
  },
});

export default CustomFlatList_Store;
