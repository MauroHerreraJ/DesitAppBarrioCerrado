import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import { Image, View } from 'react-native';



import AllButtons from './screen/AllButtons';
import Configuration from './screen/Configuration';

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

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          >
          <Stack.Screen
            name="Desi"
            component={Navigation}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

