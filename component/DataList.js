import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState, useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { storeData } from "../util/http";
import { DataUserContext } from "./store/context/dataUser-context";

import TextImputClient from "../UI/TextImputClient";
import SaveButton from "./SaveButton";

function DataList() {

  const navigation = useNavigation();

  const {
    userName,
    setUserName,
    document,
    setDocument,
    registrationCode,
    setRegistrationCode,
    dataUser,
  } = useContext(DataUserContext);

  const [isButtonEnabled, setIsButtonEnabled] = useState(false)
  useEffect(() => {
    if (userName.length > 0 && document.length > 0 && registrationCode.length > 0) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [userName, document, registrationCode]);

  function saveData() {
    setUserName("");
    setDocument("");
    setRegistrationCode("");
    storeData(dataUser);
    console.log(dataUser);
    navigation.navigate("Principal");
  }


  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.imputContainer}>
          <View>
            <Text style={styles.text}>Apellido/Nombre</Text>
            <TextImputClient
              text={"Ingrese Apellido/Nombre"}
              onDattaChange={setUserName}
              value={userName}
              name={"person"}
              />
          </View>
          <View>
            <Text style={styles.text}>Documento</Text>
            <TextImputClient
              text={"Ingrese número de documento"}
              onDattaChange={setDocument}
              value={document}
              name={"subtitles"}
              type="numeric"
              maxLength={8}
            />
          </View>
          <View>
            <Text style={styles.text}>Código de Alta</Text>
            <TextImputClient
              text={"Ingrese código de alta"}
              onDattaChange={setRegistrationCode}
              value={registrationCode}
              name={"vpn-key"}
              type="numeric"
              maxLength={6}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.buttonContainer}>
        <SaveButton onPress={saveData} isEnabled={isButtonEnabled} />
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
  buttonContainer: {
    marginTop: 210,
  },
  text: {
    color: "white"
  },
  container:{
    flexDirection: 'row',
   
  }
})

