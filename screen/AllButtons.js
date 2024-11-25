import { View, StyleSheet, ImageBackground,Vibration,TouchableOpacity,Image} from "react-native";
import { savePost } from "../util/Api";

function AllButtons() {

    const cuentaStore = 1
   
      const primaryButton = async () => {
        try {      
          Vibration.vibrate(500),
                  
          savePost(
            {
              evento: "120",
              evecuenta: cuentaStore,      
              detalle: "Pánico",
              critico:  "1"
            }
          )        
        } catch (error) {
          console.log(error);
      };} 
    
    return (
      <>
      <ImageBackground
          source={require('../assets/126353.jpg')}
          resizeMode="cover"
          style={styles.rootScreen}>
         
          <View style={styles.container}>
          <TouchableOpacity onPress={primaryButton}>
        <Image
          source={require('../assets/botonpanico.png')} // URL de la imagen
          style={styles.buttonImage}
        />
      </TouchableOpacity>
          </View>
      </ImageBackground>
  </>
      
    );
}
export default AllButtons;

const styles = StyleSheet.create({
  
    
    seconButtonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    rootScreen: {
        flex: 1
    },
    buttonImage: {
      marginTop:100,
      alignItems:"center",
      width: 350, // Ajusta el ancho de la imagen
      height: 350, // Ajusta la altura de la imagen
      borderRadius: 10, // Opcional: hace las esquinas redondeadas
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})