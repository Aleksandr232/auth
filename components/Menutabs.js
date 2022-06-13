import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomNavigation} from 'react-native-paper';
import Main from './Main';
import Setingsscreen from './screens/setingsscreen';


export default function Menutabs(){
    const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'books', title: 'Книги', icon: 'image-multiple' },
    { key: 'setings', title: 'Настройки', icon: 'file-video-outline' },
    
  ]);
  const renderScene = BottomNavigation.SceneMap({
    books: Main,
    setings: Setingsscreen, 
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  ); 
}