import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Books from '../screens/Books';
import Setings from '../screens/Setings';

const Stack = createNativeStackNavigator();

  export default function Navigation(){
  (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen name="Setings" component={Setings} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}