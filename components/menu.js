import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { View, ImageBackground, StyleSheet} from 'react-native';
import BooksNavigate from './navigation/Navigation';
import Setings from './screens/Setings';


export default function Menu() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'Books', title: 'Книги', icon:'view-dashboard', color: '#3F51B5' },
      { key: 'Setings', title: 'Настройи', icon: 'cog-transfer-outline' },
     
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      Books: BooksNavigate,
      Setings: Setings,
      
      
      
    });
    return (
        <View style={styles.container}>
              
        <BottomNavigation
        barStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.61)' }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </View>
      
    );
    
      
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
      left: '45%',
      top: 160,
      color:'#FFFF',
      fontSize:19,
      fontWeight:'700'
    },
    menu:{
        backgroundColor:'#E5E5E5'
    }
    
  })