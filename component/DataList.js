import { View, Text, StyleSheet, TouchableWithoutFeedback,Keyboard } from "react-native";
import { useState, useEffect,useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { storeData } from "../util/http";
import { DataUserContext } from "./store/context/dataUser-context";

import TextImputClient from "../UI/TextImputClient";
import SaveButton from "./SaveButton";
 
function DataList() {
    
    const navigation = useNavigation();

    const {
        accountNumber,
        setAccountNumber,
        registrationCode,
        setRegistrationCode,
        centralCode,
        setCentralCode,
        dataUser,
      } = useContext(DataUserContext);

    const [isButtonEnabled,setIsButtonEnabled] = useState(false)
    useEffect(() => {
        if (accountNumber.length > 0 && registrationCode.length > 0 && centralCode.length > 0) {
          setIsButtonEnabled(true);
        } else {
          setIsButtonEnabled(false);
        }
      }, [accountNumber, registrationCode,centralCode]);
     
      function saveData() {
        setAccountNumber(accountNumber);
        setRegistrationCode("");
        setCentralCode("");
        storeData(dataUser);
        console.log(dataUser);
        navigation.goBack();
      }
 
    
    return (
        <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.imputContainer}>
                <View>
                    <Text>Número de Cuenta</Text>
                    <TextImputClient
                        text={"Ingrese número de cuenta"}
                        onDattaChange={setAccountNumber}
                        value={accountNumber}
                         />
                </View>
                <View>
                    <Text>Código de Alta</Text>
                    <TextImputClient
                        text={"Ingrese código de alta"}
                        onDattaChange={setRegistrationCode}
                        value={registrationCode} 
                        />
                </View>
                <View>
                    <Text>Código Central</Text>
                    <TextImputClient
                        text={"Ingrese código de central"}
                        onDattaChange={setCentralCode}
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

