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
  Modal,
  ImageBackground,
  Button
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import  POST  from "./POST";

const Data = () => {
  const [post, setPost]=useState(POST)
  const [isRender, setIsRender] = useState(true)
  const [isModalVisible, setisModalVisible]=useState(false)
  const keyExtractor = useCallback(item => item.id.toString())
  const Item = ({ title, img, author }) => (
    <TouchableOpacity onPress={()=>onPressItem(Item)}>
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

  const onPressItem=(item)=>{
    setisModalVisible(true)
  }

  const onPressNoItem=(item)=>{
    setisModalVisible(false)
  }

  const Modals=({ title, img, author })=>(
    <View style={styles.container1}>
    <ImageBackground source={require('./img/el4.png')}  style={styles.img} >
      <Text style={styles.text}>Книга</Text>
      <View style={{flex:1, top:140, left:50}}>
          <TouchableOpacity onPress={()=>onPressNoItem(Item)}>
              <Image source={require('./img/strel.png')}/>
          </TouchableOpacity>
      </View>
    </ImageBackground>
        <Text style={styles.textModal}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
  </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={post}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={isRender}
      />
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={()=>setisModalVisible(false)}
      >
          <Modals/>
      </Modal>
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
  },
  container1:{
    backgroundColor:'rgba(255, 255, 255, 0.61)',
    height:"100%"
  },
  img:{
    width:'100%',
    height:246.15,
    top:-93,
  },
  text:{
    width: 130,
    height: 24,
    left: '45%',
    top: 160,
    color:'#FFFF',
    fontSize:19,
    fontWeight:'700'
  },
  text1:{
    fontFamily: 'Circular Std',
    width: 314,
    height: 16,
    fontSize:15,
    fontWeight:"700",
    color:'#384F7D',
    left:20
  },
  textModal:{
    left: '50%',
    right: '75.96%',
    top: '10.53%',
    bottom: '26.32%',
    color:'#111'
  }
});

export default Data;

{
  /* <Image
         style={styles.img}
         source={{uri:img}}/> */
}
