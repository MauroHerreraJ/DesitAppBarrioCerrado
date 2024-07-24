import { View,StyleSheet } from "react-native";
import PrimaryButton from "../component/PrimaryButton";
import SecondaryButton from "../component/SecondaryButton";
import { styles1 } from "../constans/Styles";
import { styles2 } from "../constans/Styles";



function AllButtons() {
    
    return (
        <>
        <View style={styles.seconButtonContainer}>
        <SecondaryButton name={"flame-outline"} styles={styles1.buttonContainer} />
        <SecondaryButton name={"medkit-outline"} styles={styles2.buttonContainer}/>
        </View>
        <PrimaryButton />
        </>
    );
} 
export default AllButtons;

const styles  = StyleSheet.create({
    seconButtonContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    }
})