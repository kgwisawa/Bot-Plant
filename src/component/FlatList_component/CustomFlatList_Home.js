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
import Add from "../../screens/CRUD_Garden/Add";

const CustomFlatList_Home = (props) => {
  const [filterData, setfilterData] = useState(props.datagarden.data);
  const [masterData, setmasterData] = useState(props.datagarden.data);
  const [search, setsearch] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    // let array = props.datagarden.data;
    // if(array[array.length-1].name != "00000")
    // array.push(DATA)
    setdata(props.datagarden.data);
    // alert("w")
  }, []);

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

  function photo(photo) {
    switch (photo) {
      case "cactus1":
        return require("../../../assets/icon/icon_plant/cactus1.png");
        break;
      case "cactus2":
        return require("../../../assets/icon/icon_plant/cactus2.png");
        break;
      case "cactus3":
        return require("../../../assets/icon/icon_plant/cactus3.png");
        break;
      case "cactus4":
        return require("../../../assets/icon/icon_plant/cactus4.png");
        break;
      case "cactus5":
        return require("../../../assets/icon/icon_plant/cactus5.png");
        break;
      case "cactus6":
        return require("../../../assets/icon/icon_plant/cactus6.png");
        break;
      case "cactus7":
        return require("../../../assets/icon/icon_plant/cactus7.png");
        break;
      case "cactus8":
        return require("../../../assets/icon/icon_plant/cactus8.png");
        break;
      case "cactus9":
        return require("../../../assets/icon/icon_plant/cactus9.png");
        break;

      default:
        return require("../../../assets/icon/icon_plant/cactus3.png");
    }
  }

  const status = (title) => {
    if (title.status === "offline")
      return (
        <View
          style={{
            height: 25,
            width: 25,
            backgroundColor: "#555555",
            marginLeft: 5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Feather size={15} color="white" name="wifi-off" />
        </View>
      );

    return (
      <View
        style={{
          height: 25,
          width: 25,
          backgroundColor: "#00d084",
          marginLeft: 5,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <Feather size={15} color="white" name="wifi" />
      </View>
    );
  };

  const Item1 = ({ title }) => (
    <View style={styles.item}>
      <View style={styles.head}>
        <Image style={styles.Logo_plant} source={photo(title.photo)} />
      </View>
      <View style={styles.mid}>
        <View
          style={{ width: "100%", height: "60%", justifyContent: "center" }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={textStyle.title_flat}>{title.name}</Text>

            {status(title)}
          </View>
          <Text style={textStyle.title_flat_type}>({title.type})</Text>

          {/* <Text style={textStyle.title_flat_dashboard}>dashboard</Text> */}
        </View>
        <View style={{ width: "100%", height: "40%", flexDirection: "row" }}>
          <View style={styles.display_day}>
            <Ionicons size={25} color="white" name="calendar" />
            <Text style={[textStyle.display_flat]}>{title.day}</Text>
          </View>

          <View style={styles.display_light}>
            <Ionicons size={25} color="white" name="sunny" />
            <Text style={textStyle.display_flat}>{title.lux} lux</Text>
          </View>

          <View style={styles.display_humi}>
            <Ionicons size={25} color="white" name="water" />
            <Text style={textStyle.display_flat}>{title.humi} %</Text>
          </View>
        </View>
      </View>

      <View style={styles.tail}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Ionicons size={25} color="#FFF" name="options" />
          <Text style={textStyle.display_flat_edit}>แก้ไข</Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item }) => {
    return <Item1 title={item} />;
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
        <TouchableOpacity
          style={{
            height: 50,
            width: "15%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5ca78c",
            marginLeft: 5,
            borderRadius: 10,
          }}
          onPress={() => {
            props.navi.navigate("เพิ่มต้นไม้", {
              dataplant: props.dataplant,
              email: props.email,
            });
          }}
        >
          <Ionicons size={25} color="#FFF" name="ios-add-circle" />
          <Text style={textStyle.display_flat_edit}>เพิ่มต้นไม้</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filterData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#eef1f4d9",
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

export default CustomFlatList_Home;
