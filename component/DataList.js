import { View, Text, StyleSheet } from "react-native";
import TextImputClient from "../UI/TextImputClient";
import SaveButton from "./SaveButton";

function DataList() {


    return (
        <>
            <View style={styles.imputContainer}>
                <View>
                    <Text>Número de Cuenta</Text>
                    <TextImputClient text={"Ingrese número de cuenta"} />
                </View>
                <View>
                    <Text>Código de Alta</Text>
                    <TextImputClient text={"Ingrese código de alta"} />
                </View>
                <View>
                    <Text>Código Central</Text>
                    <TextImputClient text={"Ingrese código de central"} />
                </View>
            </View>

            <SaveButton />
        </>
    );
}

export default DataList;

const styles = StyleSheet.create({
    imputContainer: {
        padding: 20,
        marginTop: 50
    }
})

