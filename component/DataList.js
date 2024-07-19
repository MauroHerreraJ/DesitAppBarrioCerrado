import { View, Text, StyleSheet } from "react-native";
import TextImputClient from "../UI/TextImputClient";
import SaveButton from "./SaveButton";
import { useState } from "react";

function DataList() {

    const [dataClient, setAccount] = useState([]);
   
    function addAccount(enteredConfigText) {
        setAccount((currentData)=>[...currentData,{text:enteredConfigText,id:Math.random().toString()}]);
    }

    return (
        <>
            <View style={styles.imputContainer}>
                <View>
                    <Text>Número de Cuenta</Text>
                    <TextImputClient text={"Ingrese número de cuenta"} onAddData={addAccount} />
                </View>
                <View>
                    <Text>Código de Alta</Text>
                    <TextImputClient text={"Ingrese código de alta"} onAddData={addAccount} />
                </View>
                <View>
                    <Text>Código Central</Text>
                    <TextImputClient text={"Ingrese código de central"} onAddData={addAccount} />
                </View>
            </View>

            <SaveButton dataClient={dataClient}  />
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

