import { View, Text, StyleSheet, TouchableWithoutFeedback,Keyboard, Modal } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import TextImputClient from "../UI/TextImputClient";
import SaveButton from "./SaveButton";
import MyModal from "./MyModal";

 
function DataList() {
    
    const navigation = useNavigation();

    const [accountNumber, setAccountNumber] = useState("");
    const [registrationCode, setregistercode] = useState("");
    const [centralCode, setCentralCode] = useState("");

    const [isButtonEnabled,setIsButtonEnabled] = useState(false)
    useEffect(() => {
        if (accountNumber.length > 0 && registrationCode.length > 0 && centralCode.length > 0) {
          setIsButtonEnabled(true);
        } else {
          setIsButtonEnabled(false);
        }
      }, [accountNumber, registrationCode,centralCode]);

 
    function addAcountNumber(data) {
        setAccountNumber(data);
    }
    function addRegistrationCode(data) {
        setregistercode(data);
    }
    function addCentralcode(data) {
        setCentralCode(data);
    }
    function saveData() {
        setAccountNumber('');
        setregistercode('');
        setCentralCode('');   
        console.log(accountNumber, registrationCode, centralCode)
        navigation.goBack();
    }
    <MyModal accountNumber={accountNumber}/>

    return (
        <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.imputContainer}>
                <View>
                    <Text>Número de Cuenta</Text>
                    <TextImputClient
                        text={"Ingrese número de cuenta"}
                        onDattaChange={addAcountNumber}
                        value={accountNumber}
                         />
                </View>
                <View>
                    <Text>Código de Alta</Text>
                    <TextImputClient
                        text={"Ingrese código de alta"}
                        onDattaChange={addRegistrationCode}
                        value={registrationCode} 
                        />
                </View>
                <View>
                    <Text>Código Central</Text>
                    <TextImputClient
                        text={"Ingrese código de central"}
                        onDattaChange={addCentralcode}
                        value={centralCode} 
                        />
                </View>
            </View>
            </TouchableWithoutFeedback>
            <View style={styles.buttonContainer}>
            <SaveButton onPress={saveData} isEnabled={isButtonEnabled}/>
            </View>



            
        </>
    );
}

export default DataList;

const styles = StyleSheet.create({
    imputContainer: {
        padding: 20,
        marginTop: 50
    },
    buttonContainer:{
       marginTop:210,
    }
})

