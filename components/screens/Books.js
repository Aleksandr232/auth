import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


const Books=()=>{
    return(
        <View style={styles.container}>
       
        <ImageBackground source={require('../img/el4.png')}  style={styles.img} >
           <Text style={styles.text}>Книги</Text>
           
          
        </ImageBackground>
        
       
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
      backgroundColor:'#E5E5E5',
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
      left: '47%',
      top: 160,
      color:'#FFFF',
      fontSize:19,
      fontWeight:'700'
    },
    
  })

export default Books
