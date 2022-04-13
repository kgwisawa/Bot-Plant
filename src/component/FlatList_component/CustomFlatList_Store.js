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
  Linking,
  ScrollView,
  Modal
} from "react-native";
import textStyle from "../../style/text-style";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";


const CustomFlatList_Store = (props) => {
  const [filterAData, setfilterAData] = useState(filter);
  const [filterBData, setfilterBData] = useState(filter2);
  const [masterAData, setmasterAData] = useState(filter);
  const [masterBData, setmasterBData] = useState(filter2);
  const [search, setsearch] = useState("");
  const [data, setdata] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const seachFilter = (text) => {
    if (text) {
      const newData = masterAData.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterAData(newData);
     
      setsearch(text);
    } else {
      setfilterAData(masterAData);
   
      setsearch(text);
    }

    if (text) {
        const newData = masterBData.filter((item) => {
          const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
          
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
     
        setfilterBData(newData);
        setsearch(text);
      } else {
      
        setfilterBData(masterBData);
        setsearch(text);
      }
  };

  const ShopA = ({ title }) => (
    <View style={styles.item}>
      <Image
        source={title.photo}
        style={{
          width: "100%",
          height: "55%",
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
          <All_Tack item={title} />
        </View>

        <View style={{ width: "30%", height: "100%" ,justifyContent:'flex-end',alignItems:'center' }}>
        <TouchableOpacity
          style={{
            height: 55,
            width: "70%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}

          onPress={() => Linking.openURL(title.link) }
        >
        <Image style={{width:"100%",height:"100%",borderRadius: 10}} source={require('../../../assets/icon/icon_plant/ig.png')}/>
          {/* <Ionicons size={25} color="#FFF" name="ios-add-circle" /> */}
          {/* <Text style={textStyle.display_flat_edit}>เพิ่มต้นไม้</Text> */}
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const ShopB = ({ title }) => (
    <View style={styles.item}>
      <Image
        source={title.photo}
        style={{
          width: "100%",
          height: "55%",
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
          <All_TackB item={title} />
        </View>

        <View style={{ width: "30%", height: "100%" ,justifyContent:'flex-end',alignItems:'center' }}>
        <TouchableOpacity
          style={{
            height: 55,
            width: "70%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}

          onPress={() => Linking.openURL(title.link) }
        >
        <Image style={{width:"100%",height:"100%",borderRadius: 10}} source={require('../../../assets/icon/icon_plant/ig.png')}/>
          {/* <Ionicons size={25} color="#FFF" name="ios-add-circle" /> */}
          {/* <Text style={textStyle.display_flat_edit}>เพิ่มต้นไม้</Text> */}
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const All_Tack = (props) => {
    return (
      <View style={{width:"100%",height:"50%",alignItems:'center',marginTop:-5}}>
      <View style={{ flexDirection: "row" ,width:"100%",height:"50%",alignItems:'center'}}>
        {TackA(props.item.A)}
        {TackB(props.item.B)}
    </View>
    <View style={{ flexDirection: "row" ,width:"100%",height:"50%",alignItems:'center',marginTop:5}}>
        {TackC(props.item.C)}
        {TackD(props.item.D)}
    </View>
      </View>
    );
  };

  const TackA = (props) => {
    if (props == true)
      return (
        <View
          style={styles.tack}
        >
        <View style={[styles.logo_tack,{backgroundColor:'#37d67a'}]}>
        <Text style={[textStyle.title_shop_tack,{marginTop:-2,color:'#FFF'}]}>#</Text>
        </View>
          <Text style={textStyle.title_shop_tack}> กระบองเพชร</Text>
        </View>
      )
  };
  const TackB = (props) => {
    if (props == true)
      return (
        <View
          style={styles.tack}
        >
        <View style={[styles.logo_tack,{backgroundColor:'#fcb900'}]}>
        <Text style={[textStyle.title_shop_tack,{marginTop:-2,color:'#FFF'}]}>#</Text>
        </View>
          <Text style={textStyle.title_shop_tack}> ต้นไม้มงคล</Text>
        </View>
      )
  };
  const TackC = (props) => {
    if (props == true)
      return (
        <View
          style={styles.tack}
        >
        <View style={[styles.logo_tack,{backgroundColor:'#eb144c'}]}>
        <Text style={[textStyle.title_shop_tack,{marginTop:-2,color:'#FFF'}]}>#</Text>
        </View>
          <Text style={textStyle.title_shop_tack}> ต้นไม้ในบ้าน</Text>
        </View>
      )
  };
  const TackD = (props) => {
    if (props == true)
    return (
      <View
        style={styles.tack}
      >
      <View style={[styles.logo_tack,{backgroundColor:'#0693e3'}]}>
      <Text style={[textStyle.title_shop_tack,{marginTop:-2,color:'#FFF'}]}>#</Text>
      </View>
        <Text style={textStyle.title_shop_tack}> ต้นไม้กรองอากาศ</Text>
      </View>
    )
  };

  const All_TackB = (props) => {
    return (
      <View style={{width:"100%",height:"50%",alignItems:'center',marginTop:-5}}>
      <View style={{ flexDirection: "row" ,width:"100%",height:"50%",alignItems:'center'}}>
        {TackA_B(props.item.A)}
        {TackB_B(props.item.B)}
    </View>
    <View style={{ flexDirection: "row" ,width:"100%",height:"50%",alignItems:'center',marginTop:5}}>
        {TackC_B(props.item.C)}
        {TackD_B(props.item.D)}
    </View>
      </View>
    );
  };

  const TackA_B = (props) => {
    if (props == true)
      return (
        <View
          style={styles.tack}
        >
        <View style={[styles.logo_tack,{backgroundColor:'#37d67a'}]}>
        <Text style={[textStyle.title_shop_tack,{marginTop:-2,color:'#FFF'}]}>#</Text>
        </View>
          <Text style={textStyle.title_shop_tack}> ชั้นวางต้นไม้</Text>
        </View>
      )
  };
  const TackB_B = (props) => {
    if (props == true)
      return (
        <View
          style={styles.tack}
        >
        <View style={[styles.logo_tack,{backgroundColor:'#fcb900'}]}>
        <Text style={[textStyle.title_shop_tack,{marginTop:-2,color:'#FFF'}]}>#</Text>
        </View>
          <Text style={textStyle.title_shop_tack}> กระถางต้นไม้</Text>
        </View>
      )
  };
  const TackC_B = (props) => {
    if (props == true)
      return (
        <View
          style={styles.tack}
        >
        <View style={[styles.logo_tack,{backgroundColor:'#eb144c'}]}>
        <Text style={[textStyle.title_shop_tack,{marginTop:-2,color:'#FFF'}]}>#</Text>
        </View>
          <Text style={textStyle.title_shop_tack}> ดินและปุ๋ย</Text>
        </View>
      )
  };
  const TackD_B = (props) => {
    if (props == true)
    return (
      <View
        style={styles.tack}
      >
      <View style={[styles.logo_tack,{backgroundColor:'#0693e3'}]}>
      <Text style={[textStyle.title_shop_tack,{marginTop:-2,color:'#FFF'}]}>#</Text>
      </View>
        <Text style={textStyle.title_shop_tack}> โรงปลูก</Text>
      </View>
    )
  };

  const rendershopA = ({ item }) => {

    return <ShopA title={item} />;
    
  };

  const rendershopB = ({ item }) => {
    return <ShopB title={item} />;
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
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

          <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>ยกเลิก</Text>
            </TouchableOpacity>
          </View>
          </View>
          </Modal>
    <View style={{width:'100%', height:80,flexDirection:'row'}}>
      <View
        style={{
          height: 80,
          width: "80%",
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

<View style={{width:"20%", height:"100%",justifyContent:'center',alignItems:'center'}}>
  <TouchableOpacity style={{width:"70%", height:50,backgroundColor:'#5ca78c',borderRadius:10,marginTop:10,justifyContent:'center',alignItems:'center'}}
  
  onPress={() => setModalVisible(!modalVisible)}>
        <AntDesign size={35} color="#FFF" name="bars" />
  </TouchableOpacity>
</View>


</View>
<ScrollView >
      <View style={{ width: "100%", height: 630 }}>
        <View style={{ width: "100%", height: 315 }}>
          <Text style={textStyle.store_title}>ร้านขายต้นไม้</Text>

          {/* <View style={{width:"100%",height:300}}> */}
          <FlatList
            data={filterAData}
            horizontal
            renderItem={rendershopA}
            keyExtractor={(item) => item.name}
          />
         
        </View>
        <View style={{ width: "100%", height: 315 }}>
          <Text style={textStyle.store_title}>ร้านขายอุปกรณ์ปลูก</Text>
          <FlatList
            data={filterBData}
            horizontal
            renderItem={rendershopB}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
      </ScrollView>
    </View>
  
  );
};

const filter = [
  {
    uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/60842256_617244702020340_7525831877203066880_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=MGBYcfVuM-4AX-UVDd5&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT_Hi61mnOiPKVR6oySEB10BI_NmBhYb6eXuvWleKBz_FA&oe=625A68EE&_nc_sid=9a90d6",
    title: "cactusroooom",
    photo: require("../../../assets/icon/icon_plant/shop/cactusroooom.png"),
    link: "https://www.instagram.com/cactusroooom/",
    A: true,
    B: false,
    C: false,
    D: false,
  },
  {
    uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/209348748_497217944713669_3451271781482026399_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=sxmdwrUmQWUAX9J56Wn&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9XEFBZ5ElUd7UVRK2BJugtRWKXP1wlYufx2J4KH8oOJg&oe=625A362C&_nc_sid=9a90d6",
    title: "cactusholic_thailand",
    photo: require("../../../assets/icon/icon_plant/shop/cactusholic_thailand.png"),
    link: "https://www.instagram.com/baantonmaiii/",
    A: true,
    B: false,
    C: false,
    D: false,
  },
  {
    uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/104469524_211290549987546_951696892974475868_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=y96gbvZ3_1AAX92MCtv&tn=ZkJ6REJ104mQfOhh&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9oL1BNpn2osVRaDWgP3YrfnOg35M7DhaO6wgaeeiYdtg&oe=625B3650&_nc_sid=9a90d6",
    title: "baantonmaiii",
    photo: require("../../../assets/icon/icon_plant/shop/baantonmaiii.png"),
    link: "https://www.instagram.com/baantonmaiii/",
    A: false,
    B: true,
    C: true,
    D: false,
  },
  {
    uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/143368414_646656432729757_3706765804862470241_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=gV8hXn4lk6gAX8PIyPK&edm=ALQROFkBAAAA&ccb=7-4&oh=00_AT-qbqzdgCFsTxz5GxU5RcKhGrJUxZENd3uZcygwDBIQ_Q&oe=625B4A01&_nc_sid=30a2ef",
    title: "plantneedyou",
    photo: require("../../../assets/icon/icon_plant/shop/plantneedyou.png"),
    link: "https://www.instagram.com/plantneedyou/",
    A: false,
    B: false,
    C: true,
    D: true,
  },
  {
    uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/150270077_125694049442282_3528591211395752215_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=a-YqDLtRLyMAX_UkAzr&edm=ALQROFkBAAAA&ccb=7-4&oh=00_AT-e4opjNSL9yPdZOPEl8zn8EOREhbsAnWnsVHpCUkr8wQ&oe=62597BC5&_nc_sid=30a2ef",
    title: "luckytree_garden",
    photo: require("../../../assets/icon/icon_plant/shop/luckytree_garden.png"),
    link: "https://www.instagram.com/luckytree_garden/",
    A: false,
    B: true,
    C: true,
    D: true,
  },
];

const filter2 = [
    {
      uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/75330271_1219368478406742_6671320517296905406_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=eseYuwe3W0sAX8zM5CX&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT9g2ePWQ5MZeSgJ22p2eav4l26yn_9jfvMikj-0cKEhEA&oe=6259FB2F&_nc_sid=9a90d6",
      title: "mai__jone",
      photo: require("../../../assets/icon/icon_plant/shop_work/mai__jone.png"),
      link: "https://www.instagram.com/mai__jone/",
      A: true,
      B: false,
      C: false,
      D: false,
    },
    {
      uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/35575235_476865846104978_6803155487362646016_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=oC5Kx9MmHhUAX8FPyWx&tn=ZkJ6REJ104mQfOhh&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT8Cwr8Uod4M_I5C0lItj4be7vqG9aViPjcVoVxZ60nJYQ&oe=6259B949&_nc_sid=9a90d6",
      title: "kreuangmai_iaoon",
      photo: require("../../../assets/icon/icon_plant/shop_work/kreuang_mai_i_aoon.png"),
      link: "https://www.instagram.com/kreuang_mai_i_aoon/",
      A: true,
      B: false,
      C: false,
      D: false,
    },
    {
      uri: "https://instagram.fkdt1-1.fna.fbcdn.net/v/t51.2885-19/116429009_614903782776105_3935476761122734400_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkdt1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=oZotpF-Ocy0AX_G0-gO&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT-5XtQgHsAHDcB2bJUMOtPlFxJtn35MUZHGMfNYztYWyw&oe=6259FE4C&_nc_sid=9a90d6",
      title: "thegangcactus",
      photo: require("../../../assets/icon/icon_plant/shop_work/thegangcactus.png"),
      link: "https://www.instagram.com/thegangcactus/",
      A: false,
      B: true,
      C: false,
      D: false,
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
    width: "90%",
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
  tack:{
    paddingHorizontal:5,
    height: 25,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
    flexDirection:'row',
    marginLeft:5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(85,85,85,0.7)",
    marginTop: 0
  },
  modalView: {
    width:'95%',
    height:'50%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingHorizontal:0,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  logo_tack:{width:15,height:15,borderRadius:20,justifyContent:'center',alignItems:'center'}
});

export default CustomFlatList_Store;
