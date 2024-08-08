import { View, StyleSheet, ImageBackground } from "react-native";
import { styles1 } from "../constans/Styles";
import { styles2 } from "../constans/Styles";

import PrimaryButton from "../component/PrimaryButton";
import SecondaryButton from "../component/SecondaryButton";

function AllButtons() {

    function primaryButton() {
        console.log("Pánico")
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
                    <SecondaryButton onPress={fireButton} name={"local-fire-department"} styles={styles1.buttonContainer}
                        text={"Alerta"}
                        text2={"Incendio"} />
                    <SecondaryButton onPress={medicButton} name={"local-hospital"} styles={styles2.buttonContainer}
                        text={"Emergencia"}
                        text2={"Médica"} />
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