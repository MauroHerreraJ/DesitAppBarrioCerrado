import { View, Text, Image, StyleSheet, Platform, ImageBackground, Pressable } from "react-native";


function Welcome({ navigation }) {

    function pressHandler() {
        navigation.navigate("Principal");
    }
    return (
        <>
            <ImageBackground
                source={require('../assets/126353.jpg')}
                resizeMode="cover"
                style={styles.rootScreen}>
                <View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Bienvenido!</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            onPress={pressHandler}
                            style={styles.button}
                        >
                            <Text style={styles.textButton}>Continuar</Text>
                        </Pressable>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={require("../assets/logonuevo.png")}
                            style={{ width: 70, height: 70 }} />
                    </View>
                    <View>
                        <Text style={styles.textImage}>Desit SA</Text>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    textContainer: {
        padding: 25,
    },
    text: {
        padding: 16,
        fontSize: 30,
        color: "white",
        textAlign: "center",
        marginTop: 80
    },
    buttonContainer: {
        marginTop: 300
    },
    button: {
        padding: 16,
        margin: 8,
        borderRadius: 8,
        paddingVertical: 25,
        paddingHorizontal: 71,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#0d47a1',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        alignItems: "center"

    },
    textButton: {
        color: "white",
        fontSize: 20
    },
    rootScreen: {
        flex: 1
    },
   imageContainer:{
    alignItems:"center",
    marginTop:130,
    marginBottom:5
   },
   textImage: {
    textAlign: "center",
    fontSize: 14,
    color:"white"
   }
})

