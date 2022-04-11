import { View, Text, FlatList ,Image } from "react-native";
import React from "react";

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
const CustomFlatList_Photo = () => {
  const Item = ({ item }) => (
    <View style={{ width:180,height:300 ,backgroundColor:'#3b5360',justifyContent:'center',alignItems:'center',marginHorizontal:5,borderRadius:10 }}>
      <Image source={item.photo} style={{width:150,height:150}} />
    </View>
  );

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      keyExtractor={(item) => item.title}
    />
  );
};

export default CustomFlatList_Photo;
