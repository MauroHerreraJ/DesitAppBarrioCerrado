import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import { Image } from 'react-native';
import { useFonts } from 'expo-font';
import { DataUserProvider } from './component/store/context/dataUser-context';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';


import AllButtons from './screen/AllButtons';
import Configuration from './screen/Configuration';
import User from './screen/User';
import welcome from './screen/Welcome';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Navigation() {

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#696969" },
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
    "open-sans": require("./fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./fonts/OpenSans-Bold.ttf"),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Preload fonts or any other task
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded && appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, appIsReady]);

  if (!fontsLoaded || !appIsReady) {
    return null; // or a custom loading component
  }



  return (
    <>
      <StatusBar style='light' />
      <DataUserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Welcome'
              component={welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Principal"
              component={Navigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Config"
              component={User}
              options={{
                presentation: "modal",
                title: "Información del Sistema",
                headerStyle: { backgroundColor: "grey" },
                headerTintColor: "white"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataUserProvider>
    </>
  );
}

