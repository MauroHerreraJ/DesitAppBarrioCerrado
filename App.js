import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import { Image } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


import AllButtons from './screen/AllButtons';
import Configuration from './screen/Configuration';
import User from './screen/User';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();


function Navigation() {

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0b0b61" },
        headerTintColor: "white",
      }}>
      <BottomTabs.Screen
        name='Desit'
        component={AllButtons}
        options={{
          title: "Desit",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (<Ionicons name='home-outline' size={size} color={color} />),
          headerLeft: () => (
            <Image
              source={require("./assets/logodesit.png")}
              style={{ width: 40, height: 40, marginLeft: 10 }}
            />
          ),
        }} />
      <BottomTabs.Screen
        name="Configuration"
        component={Configuration}
        options={{
          title: "Configuración",
          tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color} />

        }} />
    </BottomTabs.Navigator>
  );
}

export default function App() {

  const [fontsLoaded] = useFonts({
    "open-sans" : require("./fonts/OpenSans-Regular.ttf"),
    "open-sans-bold" : require("./fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded)
    return <AppLoading/>

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
        >
          <Stack.Screen
            name="Desi"
            component={Navigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="User"
            component={User}
            options={{ 
              presentation:"modal",
              title:"Información del Sistema",
              headerStyle: { backgroundColor: "#0b0b61" },
              headerTintColor: "white"
             }}


          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

