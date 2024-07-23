import { View,StyleSheet } from "react-native";
import PrimaryButton from "../component/PrimaryButton";
import SecondaryButton from "../component/SecondaryButton";


function AllButtons() {
    
    return (
        <>
        <View style={styles.seconButtonContainer}>
        <SecondaryButton/>
        <SecondaryButton/>
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