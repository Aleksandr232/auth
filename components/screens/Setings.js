import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Setings=()=>{
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
      left: '40%',
      top: 160,
      color:'#FFFF',
      fontSize:19,
      fontWeight:'700'
    },
    
  })


export default Setings