import React,{useCallback, useState} from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import  POST  from "./POST";

const Data = () => {
  const [post, setPost]=useState(POST)
  const keyExtractor = useCallback(item => item.id.toString())
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

  const renderItem = useCallback(({ item }) => (
    <Item title={item.title} img={item.img} author={item.author} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={post}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
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
