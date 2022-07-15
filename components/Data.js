import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, Image } from 'react-native';
 import { Rating, AirbnbRating } from 'react-native-ratings';


const Data = () => {

      const DATA = [
        {
          id: '1',
          title: 'Remote: Office Not Required',
          img: require('./img/image2.png')
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
        <Image style={{left:4, width:71, height:107, bottom:50}} source={img}/>
        <View style={styles.rating}>
            <Rating
              count={5}
              defaultRating={4}
              imageSize={16}
          />
      </View>
  </View>
  
);


  const renderItem = ({ item }) => (
         <Item title={item.title} img={item.img} />   
  );

 

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      width: 315,
      height: 147,
    },
    rating:{
      left:20,
      bottom:50
    },
    title:{
      left: '40.53%',
      right: '10.93%',
      top: '1.16%',
      bottom: '63.18%',
      color: '#384F7D',
      fontSize:18,
      width:200
      
    }
  
});

export default Data;

{/* <Image
         style={styles.img}
         source={{uri:img}}/> */}