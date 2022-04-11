import { View, Text, StyleSheet, SafeAreaView, Image ,ActivityIndicator } from "react-native";
import React ,{useState ,useEffect} from "react";
import textStyle from "../style/text-style";


import CustomFlatList_Home from "../component/FlatList_component/CustomFlatList_Home";



import { db } from "../service/firebase";
import { doc, getDoc } from "firebase/firestore";

const Home = ({ route,navigation }) => {

  const [garden_data,setgarden_data] = useState([])
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [dataplant, setdataplant] = useState([]);


  function getplant_firebase() {
    const myDoc = doc(db, "Plant", "cactus");
    getDoc(myDoc)
      // Handling Promises
      .then((snapshot) => {
        // MARK: Success
        if (snapshot.exists) {
          setdataplant(snapshot.data().data)
          setLoading2(false)
          // console.log("dataplant "+ snapshot.data().data)
        } else {
          alert("No Doc Found");
        }
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  function get_garden_firebase () {
 
    const myDoc = doc(db, "User", route.params.email ,"Garden","detail");
    getDoc(myDoc)
      // Handling Promises
      .then((snapshot) => {
        // MARK: Success
        if (snapshot.exists) {
         setgarden_data(snapshot.data())
         setLoading(false);
         
        } else {
          alert("No Doc Found");
        }
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });

  };

  useEffect(() => {
    // Update the document title using the browser API
    get_garden_firebase ();
    getplant_firebase();
    
    // alert("w")
  },[]);

  if (loading && loading2) {
    return (
      <SafeAreaView style={styles.content}>
      <View style={styles.screen}>
        <View style={styles.title}>
          <View style={styles.left_title}>
            <Text style={[textStyle.title]}>Welcome to</Text>
            <Text style={[textStyle.title_detail]}>your garden </Text>
          </View>
          <View style={styles.rigth_title}>
            <Image
              style={styles.Logo}
              source={require("../../assets/icon/icon_drawer/logo_botplant.png")}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} />
      </View>
          </View>
      </SafeAreaView>

    );
  }
  return (

    <SafeAreaView style={styles.content}>
    <View style={styles.screen}>
      <View style={styles.title}>
        <View style={styles.left_title}>
          <Text style={[textStyle.title]}>Welcome to</Text>
          <Text style={[textStyle.title_detail]}>your garden </Text>
        </View>
        <View style={styles.rigth_title}>
          <Image
            style={styles.Logo}
            source={require("../../assets/icon/icon_drawer/logo_botplant.png")}
          />
        </View>
      </View>
      
        <CustomFlatList_Home datagarden={garden_data} navi={navigation} dataplant={dataplant} email={route.params.email}/>
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
