import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Modal
    , Pressable
    , FlatList 
    ,NativeModules
  } from "react-native";
  import React, { useState ,useEffect } from "react";
  import DropDownPicker from "react-native-dropdown-picker";
  import inputStyle from "../../style/input-style";
  import textStyle from "../../style/text-style";
  import Moment from "moment";
  import MaterialIcons from "react-native-vector-icons/MaterialIcons";
  import Feather from "react-native-vector-icons/Feather";
  import Ionicons from "react-native-vector-icons/Ionicons";
  
  import { db } from "../../service/firebase";
  import { doc, setDoc ,getDoc } from "firebase/firestore";
  
  const Update = ( { navigation, route }) => {
  
    const [photopath, setphotopath] = useState(require("../../../assets/icon/icon_plant/cactus1.png"));
    const [photoname, setphotoname] = useState("cactus1");
    const [open, setOpen] = React.useState(false);
    const [name, setname] = useState("");
    const [value, setValue] = React.useState(""); // ถ้าทำmulti ใส่[]
    const [loading, setLoading] = useState(false);
  
    const [dataplant, setdataplant] = useState(route.params.dataplant);
    const [datagarden, setdatagarden] = useState([]);
    useEffect(() => {
      // Update the document title using the browser API
      getgarden_firebase();
    },[]);
  
  
    const reSet = () => {
      NativeModules.DevSettings.reload();
    }

    // const Update = (value, merge) => {
    //     // MARK: Updating Doc
    //     const myDoc = doc(db, "MyCollection", "MyDocument")
    
    //     // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
    //     setDoc(myDoc, value, { merge: merge })
    //       // Handling Promises
    //       .then(() => {
    //         // MARK: Success
    //         alert("Updated Successfully!")
    //         setText("")
    //       })
    //       .catch((error) => {
    //         // MARK: Failure
    //         alert(error.message)
    //       })
    //   }
  
    function getgarden_firebase() {
      const myDoc = doc(db, "User", route.params.email ,"Garden","detail");
      getDoc(myDoc)
        // Handling Promises
        .then((snapshot) => {
          // MARK: Success
          if (snapshot.exists) {
            setdatagarden(snapshot.data().data)
            // console.log("dataplant "+ snapshot.data().data)
            // alert("w")
          } else {
            alert("No Doc Found");
          }
        })
        .catch((error) => {
          // MARK: Failure
          alert(error.message);
        });
    };

      // ? CreatePlant Function ?//
      function CreatePlant() {
        const myDoc = doc(db, "User", route.params.email ,"Garden","detail");
        let sum = [];
        sum = datagarden;
        const data = {
          name: name,
          type: value,
          photo: photoname,
          lux: "0",
          humi:"0",
          day:Moment().format("Do MMM YY"),
          status:"offline"
        };
        sum.push(data);
        const final = {
          data : sum
        }
        // console.log(sum)
        setDoc(myDoc, final)
          // Handling Promises
          .then(() => {
            reSet();
            // MARK: Success
          })
          .catch((error) => {
            // MARK: Failure
            alert(error.message);
          });
      }
  
  
    const [modalVisible, setModalVisible] = useState(false);
    const [modaladdVisible, setModaladdVisible] = useState(false);
  
    const Item = ({ item }) => (
      <View style={{ width:180,height:300 ,backgroundColor:'#3b5360',justifyContent:'center',alignItems:'center',marginHorizontal:5,borderRadius:10 }}>
        <Image source={item.photo} style={{width:150,height:150}} />
        <TouchableOpacity
              style={{
                height: 50,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#5ca78c",
                marginTop: 10,
                borderRadius: 10,
                flexDirection: "row",
              }}
            onPress={() => {setphotopath(item.photo)
              setphotoname(item.title)
              setModalVisible(!modalVisible)
              }}
            >
              <MaterialIcons
                size={25}
                color="white"
                name="photo-size-select-actual"
              />
              <Text style={textStyle.add_photo}>เลือก</Text>
            </TouchableOpacity>
      </View>
    );
  
    const renderItem = ({ item }) => {
      return <Item item={item} />;
    };
  
  
    return (
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#FFF",
          padding: 10,
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
            <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.title}
      />
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>ยกเลิก</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={modaladdVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModaladdVisible(!modaladdVisible);
          }}
        >
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalView2}>
  
            <TouchableOpacity
              style={{
                height: 200,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#555555",
                marginTop: 10,
                borderRadius: 10,
                marginRight:10
            
              }}
  
              onPress={() => CreatePlant()}
            >
              <Feather
                size={50}
                color="white"
                name="wifi-off"
              />
              <Text style={textStyle.add_status}>สถานะ offline</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
              style={{
                height: 200,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00d084",
                marginTop: 10,
                borderRadius: 10,
               
              }}
              onPress={() => alert("Optional")}
            >
              <MaterialIcons
                size={50}
                color="white"
                name="cast-connected"
              />
              <Text style={textStyle.add_status}>เชื่อมต่อ bot</Text>
            </TouchableOpacity>
            </View>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModaladdVisible(!modaladdVisible)}
              >
                <Text style={styles.textStyle}>ยกเลิก</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
  
        <View style={styles.bg}>
        <View style={styles.head}>
          <View
            style={{
              height: "100%",
              width: "50%",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <View
              style={{
                height: 170,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#eef1f4",
                borderRadius: 10,
              }}
            >
              <Image
                style={styles.Logoprofile}
                source={photopath}
              />
            </View>
  
            <TouchableOpacity
              style={{
                height: 50,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#5ca78c",
                marginTop: 10,
                borderRadius: 10,
                flexDirection: "row",
              }}
           
              onPress={() => setModalVisible(true)}
            >
              <MaterialIcons
                size={25}
                color="white"
                name="photo-size-select-actual"
              />
              <Text style={textStyle.add_photo}>เปลี่ยนรูป</Text>
            </TouchableOpacity>
  
  
          </View>
          <View style={{ height: "100%", width: "50%", paddingTop: 20 }}>
            {/* Input name */}
            <TextInput
              style={[inputStyle.inputadd]}
              onChangeText={(text) => setname(text)}
              maxLength={15}
              value={name}
              placeholder={"ชื่อ (Name)"}
            />
            <View
              style={{
                width: "90%",
                height: 50,
                alignItems: "center",
                
                marginTop: 10,
                backgroundColor: "#eb144c",
                padding: 10,
                borderRadius: 10,
                flexDirection:'row'
              }}
            >
              <Ionicons
                size={25}
                color="white"
                name="calendar"
              />
              <Text style={textStyle.adddate}>
              {Moment().format("Do MMM YYYY")}
              </Text>
            </View>
  
            <DropDownPicker
              loading={loading}
              searchable={true}
              searchTextInputProps={{
                maxLength: 25,
              }}
              searchPlaceholder="Search..."
              searchPlaceholderTextColor="grey"
              searchContainerStyle={[
                styles.shadowProp,
                {
                  borderBottomColor: "#dfdfdf",
                  borderRadius: 15,
                },
              ]}
              searchTextInputStyle={{
                color: "#000",
                borderWidth: 0.5,
                height: 35,
                fontFamily: "Opun_Regular",
                fontSize: 12,
              }}
              customItemContainerStyle={{
                backgroundColor: "#dfdfdf",
                borderRadius: 15,
                borderWidth: 0,
              }}
              customItemLabelStyle={{
                fontFamily: "Opun_Regular",
              }}
              //multiple={true}       //เผื่ออยากลองงทำหลายตัวพร้อมๆกัน
              stickyHeader={true}
              rtl={true}
              dropDownDirection="BUTTOM"
              min={0}
              max={4}
              open={open}
              value={value}
              items={dataplant}
              maxHeight={200} //Max height of the drop-down box.
              //autoScroll={true}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setdataplant}
              placeholder="เลือกชนิดต้นไม้"
              placeholderStyle={{
                color: "grey",
                fontWeight: "bold",
                fontFamily: "Opun_Regular",
              }}
              dropDownContainerStyle={{
                backgroundColor: "#ffff",
                width: "90%",
                marginLeft: 0,
                marginTop: 0,
                borderWidth: 0.42,
  
                //borderRadius:10
              }}
              style={[
                {
                  borderWidth: 0.3,
                  borderColor: "gray",
                  width: "90%",
                  marginTop: 10,
                  borderRadius: 15,
                  padding: 5,
                  fontSize: 20,
                  backgroundColor: "#fff",
                  alignItems: "center",
                },
                styles.shadowProp,
              ]}
              textStyle={{
                fontSize: 15,
              }}
              labelStyle={{
                fontWeight: "bold",
              }}
            />
          </View>
        </View>
        <View style={{width:'100%',height:'70%',alignItems:'center',marginTop:5}}>
                <TouchableOpacity
                style={[styles.buttoadd]}
                // onPress={() => CreatePlant()}
                onPress={() => {
  
                  if(name === ""){
                    alert("กรุณาเติมชื่อ")
                  }
                  else if(value === ""){
                    alert("กรุณาเลือกชนิดต้นไม้")
                  }
                  else{
                    setModaladdVisible(true)
                  }
                  
                  
                  }}
              >
                <Text style={textStyle.addbt}>เพิ่มต้นไม้</Text>
              </TouchableOpacity>
              </View>
      </View>
      </View>
    );
  };
  
  const data = [
    {
      title:"cactus1",
      photo: require("../../../assets/icon/icon_plant/cactus1.png"),
    },
    {
      title:"cactus2",
      photo: require("../../../assets/icon/icon_plant/cactus2.png"),
    },
    {
      title:"cactus3",
      photo: require("../../../assets/icon/icon_plant/cactus3.png"),
    },
    {
      title:"cactus4",
      photo: require("../../../assets/icon/icon_plant/cactus4.png"),
    },
    {
      title:"cactus5",
      photo: require("../../../assets/icon/icon_plant/cactus5.png"),
    },
    {
      title:"cactus6",
      photo: require("../../../assets/icon/icon_plant/cactus6.png"),
    },
    {
      title:"cactus7",
      photo: require("../../../assets/icon/icon_plant/cactus7.png"),
    },
    {
      title:"cactus8",
      photo: require("../../../assets/icon/icon_plant/cactus8.png"),
    },
    {
      title:"cactus9",
      photo: require("../../../assets/icon/icon_plant/cactus9.png"),
    },
  ];
  
  
  
  
  const styles = StyleSheet.create({
    Logoprofile: {
      height: 130,
      width: 130,
      // borderRadius: 10,
    },
    type: {
      marginTop: 10,
    },
    head: {
      height: "60%",
      width: "100%",
      flexDirection: "row",
      backgroundColor: "#3b5360",
      borderRadius: 10,
      paddingTop:15,
      marginTop:50,
      shadowColor: "#000",
      shadowOffset: {
        width: 1,
        height: 3,
        borderRadius: 10,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
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
    modalView2:{
      width:'100%',
      height:'70%',
      margin: 20,
      flexDirection:'row',
      borderRadius: 20,
      padding: 35,
      paddingHorizontal:0,
      alignItems: "center",
      justifyContent:'center'
      
    },
    button: {
      width:'30%',
      height:'15%',
      borderRadius: 20,
      elevation: 2,
      justifyContent:'center',
      alignItems:'center',
      marginBottom:-15
    },
    buttoadd:{
      marginTop:20,
      width:'60%',
      height:'15%',
      borderRadius: 10,
      elevation: 2,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: "#2196F3",
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      fontFamily:'Opun_Regular'
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    bg:{
      width:'100%',
      height:'100%',
      paddingTop:30
    }
  });
  export default Update;
  