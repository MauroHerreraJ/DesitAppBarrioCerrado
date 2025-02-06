import {View,StyleSheet,ImageBackground,Vibration,TouchableOpacity,Image,Animated} from "react-native";
import React, { useState, useRef } from "react";
import { savePost } from "../util/ApiLocal";
import { LinearGradient } from "expo-linear-gradient";


const AllButtons = () => {
  const [showProgressBar, setShowProgressBar] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const startTimeRef = useRef(null);

  const handlePressIn = () => {
    setShowProgressBar(true);
    animatedValue.setValue(0);
    startTimeRef.current = Date.now();
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    setShowProgressBar(false);
    animatedValue.stopAnimation();

    if (startTimeRef.current) {
      const pressDuration = Date.now() - startTimeRef.current;
      if (pressDuration > 600) enviarEvento("ALARM");
    }
  };

  const barWidth = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  const enviarEvento = async (eventType) => {
    Vibration.vibrate(500);
    try {
      const result = await savePost({
       eventCode: "107"
      });
      if (result.status === 200) 
        console.log(`${eventType} enviado`, result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ImageBackground
        source={require('../assets/126353.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}>
        <View style={styles.container}>
          <TouchableOpacity onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Image
              source={require('../assets/botonpanico.png')} // URL de la imagen
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
        {showProgressBar && (
        <View style={styles.progressBarContainer}>
          <Animated.View style={{ width: barWidth }}>
            <LinearGradient
              colors={["#0d47a1", "#0d47a1"]}
              style={styles.progressBar}
            />
          </Animated.View>
        </View>
      )}
      </ImageBackground>
    </>
  );
}

export default AllButtons;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  buttonImage: {
    marginTop: 100,
    alignItems: "center",
    width: 350, // Ajusta el ancho de la imagen
    height: 350, // Ajusta la altura de la imagen
    borderRadius: 10, // Opcional: hace las esquinas redondeadas
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    width: "100%",
    height: 15,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    borderRadius: 8,
  },
});