import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

const Data = () => {
  const DATA = [
    {
      id: "1",
      title: "Remote: Office Not Required",
      author: "Jason Fried",
      img: require("./img/image2.png"),
    },
    {
      id: "2",
      title: "Papillon",
      author: "Henri Charriere",
      img: require("./img/papillon.png"),
    },
    {
      id: "3",
      title: "The Dark Tower:The Gunslinger",
      author: "Stephen King",
      img: require("./img/thedark.png"),
    },
  ];

  const Item = ({ title, img, author }) => (
    <TouchableOpacity>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
      <Image
        style={{ left: 4, width: 71, height: 107, bottom: '55%',  }}
        source={img}
      />
      <View style={styles.rating}>
        <Rating count={5} defaultRating={4} imageSize={16} />
      </View>
    </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} author={item.author} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 415,
    height: 370,
    left: 30,
    bottom: 140
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 315,
    height: 147,
  },
  rating: {
    left: 20,
    bottom: 68,
  },
  title: {
    left: "40.53%",
    right: "10.93%",
    bottom: "53.18%",
    top:'1%',
    color: "#384F7D",
    fontSize: 18,
    width: 200,
  },
  author:{
    left: '40.53%',
    right: '-40.53%',
    top: '7.44%',
    bottom: '60.34%',
    color: 'rgba(56, 79, 125, 0.8)',
    fontSize:14
  }
});

export default Data;

{
  /* <Image
         style={styles.img}
         source={{uri:img}}/> */
}
