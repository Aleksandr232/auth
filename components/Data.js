import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ScrollView, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    img: 'https://s0.rbk.ru/v6_top_pics/media/img/3/16/755954419776163.jpg'
  },
  {
    id: '2',
    title: 'Second Item',
    img: '../img/image2.png'
  },
  
];

const Item = ({ title })=> (
  <View>
    <View style={styles.item1}>
   <Text style={styles.title}>{title}</Text>
  </View>
  {/* <View style={styles.item2}>
   <Text style={styles.title}>{title}</Text>
  </View>
  <View style={styles.item3}>
   <Text style={styles.title}>{title}</Text>
  </View> */}
  </View>
);

const Data = () => {
  const renderItem = ({ item }) => (
        <Item title={item.title} />
        
        
     
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
    bottom:130
    
  },
  item1: {
    width: 315,
    height: 247,
    left:45,
    top: 2,
    backgroundColor: '#FFFF',
    
  },
  item2: {
    width: 315,
    height: 247,
    left: 45,
    top: 30,
    backgroundColor: '#FFFF',
    
  },
  item3: {
    width: 315,
    height: 247,
    left: 45,
    top: 20,
    backgroundColor: '#FFFF',
    
  },
  title: {
    fontSize: 32,
  },
  img:{
    
  }
});

export default Data;

{/* <Image
         style={styles.img}
         source={{uri:img}}/> */}