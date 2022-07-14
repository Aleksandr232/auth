import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, Image } from 'react-native';
 import { Rating, AirbnbRating } from 'react-native-ratings';

const DATA = [
  {
    id: '1',
    title: 'Remote: Office Not Required',
    img: 'img/image2.png'
  },
  {
    id: '2',
    title: 'Papillon',
    img: 'https://n1s1.hsmedia.ru/c0/f3/11/c0f3118d2a80f0f62409e68ccefab345/728x542_1_390d29f38af62661e1e5cd685acda5a2@1000x745_0xac120003_18591848241576673801.jpg'
  },
  {
    id: '3',
    title: 'The Dark Tower:The Gunslinger',
    img: 'https://n1s1.hsmedia.ru/c0/f3/11/c0f3118d2a80f0f62409e68ccefab345/728x542_1_390d29f38af62661e1e5cd685acda5a2@1000x745_0xac120003_18591848241576673801.jpg'
  }
  
];

const Item = ({ title, img})=> (
  <View style={styles.item}>
   <Text style={styles.title}>{title}</Text>
        <Image style={{left:40, width:40}} source={{uri:img}}/>
      <View style={styles.rating}>
            <AirbnbRating
              count={5}
              defaultRating={4}
              size={16}
          />
      </View>
  </View>
  
);

const Data = () => {
  const renderItem = ({ item }) => (
         <Item title={item.title} />   
  );

 /*  const renderItes = ({ id }) => (
    <Item img={id.img} /> 
); */

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 415,
    height: 347,
    left: 30,
    bottom:140
  },
  item: {
      backgroundColor: '#E5E5E5',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      width: 315,
      height: 147,
    },
    rating:{
      left:70,
      top:40
    }
  
});

export default Data;

{/* <Image
         style={styles.img}
         source={{uri:img}}/> */}