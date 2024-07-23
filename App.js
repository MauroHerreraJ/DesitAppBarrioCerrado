import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"

import AllButtons from './screen/AllButtons';
import Configuration from './screen/Configuration';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Navigation() {

 
  return (
    <BottomTabs.Navigator> 
      <BottomTabs.Screen 
      name='Principal' 
      component={AllButtons}
      options={{
      headerShown: false,
      tabBarLabel:"Home",
      tabBarIcon: ({color,size}) => <Ionicons name='home-outline' size={size} color={color}/>
      
      }} />
      <BottomTabs.Screen 
      name="Configuration" 
      component={Configuration} 
      options={{headerShown: false,
        tabBarIcon: ({color,size}) => <Ionicons name='settings-outline' size={size} color={color}/>  

      }} />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#0b0b61" },
            headerTintColor: "white"
          }}>
          <Stack.Screen name="AllButton" component={Navigation} options={{ title: "DesitApp" }} />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

