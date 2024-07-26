import { View,StyleSheet} from "react-native";
import { styles1 } from "../constans/Styles";
import { styles2 } from "../constans/Styles";

import PrimaryButton from "../component/PrimaryButton";
import SecondaryButton from "../component/SecondaryButton";


function AllButtons() {

    function primaryButton(){
        console.log("Alerta")
    }
    function fireButton(){
        console.log("Fuego")
    }
    function medicButton(){
        console.log("Medico")
    }
    
    return (
        <>
        <View style={styles.seconButtonContainer}>
        <SecondaryButton onPress={fireButton} name={"flame-outline"} styles={styles1.buttonContainer} />
        <SecondaryButton onPress={medicButton} name={"medkit-outline"} styles={styles2.buttonContainer}/>
        </View>
        <View style={styles.primaryButtonContainer}>
        <PrimaryButton onPress={primaryButton} />
        </View>
        </>
    );
} 
export default AllButtons;

const styles  = StyleSheet.create({
    primaryButtonContainer:{
        flex:0.8
    },
    seconButtonContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    }
})