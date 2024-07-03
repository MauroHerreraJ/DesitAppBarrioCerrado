import { StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllButtons from './screen/AllButtons'; 
import Configuration from './screen/Configuration';

 const  Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor:"#0b0b61"},
        headerTintColor:"white"
      }}>
        <Stack.Screen name="AllButton" component={AllButtons} options={{title:"DesitApp"}}/>
      </Stack.Navigator>
    
     </NavigationContainer>
     </> 
     );
}

