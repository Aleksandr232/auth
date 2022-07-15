import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableHighlight, Linking } from 'react-native';

import  {InputField}  from '../UI/InputField';
import Data from '../Data';


const Books=()=>{
    return(
        <View style={styles.container}>
        <ImageBackground source={require('../img/el4.png')}  style={styles.img} >
           <Text style={styles.text}>Книги</Text>
           <View>
       <TouchableHighlight onPress={()=>Linking.openURL('https://mcdonalds.ru/')} >
          <Image source={require('../img/search.png')} style={styles.search} />
       </TouchableHighlight>
       </View>
        </ImageBackground>
        <View style={styles.input} >
        <InputField 
          placeholder="Поиск..."/>
          <Text style={styles.text1}>Результат</Text>
        </View>
        <View>
              <Data/>
        </View>
        
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
      backgroundColor:'inear-gradient(315deg, rgba(255, 255, 255, 0.61) 3.5%, rgba(121, 171, 252, 0.61) 93.61%, rgba(96, 108, 255, 0.61) 147.83%);',
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
    input:{
      bottom: 180
    },
    search:{
      top:175,
      left: 375,
      width:20,
      height:20
    },
    text1:{
      fontFamily: 'Circular Std',
      width: 314,
      height: 16,
      fontSize:15,
      fontWeight:"700",
      color:'#384F7D',
      left:20
    }
    
  })

export default Books
