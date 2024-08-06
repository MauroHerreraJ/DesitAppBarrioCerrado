import { View,Text, Button, StyleSheet,Platform, ImageBackground} from "react-native";
import SecondaryButton from "../component/SecondaryButton";

function Welcome({navigation}){

    function pressHandler(){
        navigation.navigate("Principal");
    }
    return(
        <ImageBackground
        source={require('../assets/126353.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}>
        <View>
            <View style={styles.textContainer}>
            <Text style={styles.text}>Bienvenido!</Text>
            </View>
            <View style={styles.buttonContainer}>
            <SecondaryButton styles={styles.button} onPress={pressHandler}/>
            </View>
            </View>
            </ImageBackground>
    )
}

export default Welcome;

const styles= StyleSheet.create({
    textContainer:{
        padding:25,
    },
        text:{
        fontSize:25,
        color:"white"
    },
    buttonContainer:{
        marginTop:250
    },
    button:{
        padding: 16,
        margin:8, 
        borderRadius: 8,
        paddingVertical:25,
        paddingHorizontal:71,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#0b0b61',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        alignItems: "center"
       
    }, rootScreen: {
        flex: 1
    }
})

