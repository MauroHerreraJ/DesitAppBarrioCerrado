import { View, StyleSheet, ImageBackground } from "react-native";
import { styles1 } from "../constans/Styles";
import { styles2 } from "../constans/Styles";
import { DataUserContext } from "../component/store/context/dataUser-context";
import { useContext } from "react";

import PrimaryButton from "../component/PrimaryButton";
import SecondaryButton from "../component/SecondaryButton";

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };


function AllButtons() {
 
    const {
        accountNumber,
        setAccountNumber,
        registrationCode,
        setRegistrationCode,
        centralCode,
        setCentralCode,
        dataUser,
      } = useContext(DataUserContext);

    function primaryButton() {
        console.log(accountNumber)
    }
    function fireButton() {
        console.log("Fuego")
    }
    function medicButton() {
        console.log("Medico")
    }

    return (

        <>
            <ImageBackground
                source={require('../assets/126353.jpg')}
                resizeMode="cover"
                style={styles.rootScreen}>
                <View style={styles.seconButtonContainer}>
                    <SecondaryButton onPress={fireButton} name={"flame-outline"} styles={styles1.buttonContainer} />
                    <SecondaryButton onPress={medicButton} name={"medkit-outline"} styles={styles2.buttonContainer} />
                </View>
                <View style={styles.primaryButtonContainer}>
                    <PrimaryButton onPress={primaryButton} />
                </View>
            </ImageBackground>
        </>

    );
}
export default AllButtons;

const styles = StyleSheet.create({
    primaryButtonContainer: {
        flex: 0.8
    },
    seconButtonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    rootScreen: {
        flex: 1
    }
})