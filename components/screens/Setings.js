import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Setings=()=>{
  
  const logout = async() => {
    await AsyncStorage.removeItem('row@232.ru');
    setIsAuth(true)
  }
    return(
        <View style={styles.container}>
       
        <ImageBackground source={require('../img/el4.png')}  style={styles.img} >
           <Text style={styles.text}>Настройки</Text>
           
          
        </ImageBackground>
        
       
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
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
      left: '40%',
      top: 160,
      color:'#FFFF',
      fontSize:19,
      fontWeight:'700'
    },
    
  })


export default Setings