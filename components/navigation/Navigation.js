import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Books from '../screens/Books';
import Setings from '../screens/Setings';

const Stack = createNativeStackNavigator();

  export default function Navigation(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Books">
      <Stack.Screen name="Books"  options={{title:'Книги', headerShown: false}}  component={Books} />
      <Stack.Screen name="Setings" options={{title:'Настройки', headerShown: false}}  component={Setings} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}