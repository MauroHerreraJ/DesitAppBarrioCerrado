import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"


import AllButtons from './screen/AllButtons';
import Configuration from './screen/Configuration';
import IconButton from './component/IconButton';
import { useState } from 'react';
import MyModal from './component/MyModal';



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
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (<Ionicons name='home-outline' size={size} color={color} />),
          tabBarBadge:2

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

  const [modalVisible,setModalVisible] = useState(false);

  function modalHandler(){
    setModalVisible(true);
  }

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#0b0b61" },
            headerTintColor: "white",
          }}>
          <Stack.Screen
            name="Desit"
            component={Navigation}
            options={{
              headerRight:()=>{
                return<>
                <IconButton title="Tap me" onPress={modalHandler}/>
                <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>  
                </>
              }
            }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
}

