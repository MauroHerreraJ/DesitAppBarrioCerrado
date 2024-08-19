import { View } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet } from "react-native";
import { useData } from "../component/store/context/serverData-context";
import { DataUserContext } from "../component/store/context/dataUser-context";
import { storeData } from "../util/http";
import { useState, useEffect, useContext } from "react";
import { getLicenciaId,updateLicencia } from "../util/Api";

import DataList from "../component/DataList";
import IconButton from "../UI/IconButton";
import SaveButton from "../component/SaveButton";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Configuration() {

    const navigation = useNavigation();
    const { fetchedData } = useData();

    const {
        userName,
        setUserName,
        document,
        setDocument,
        registrationCode,
        setRegistrationCode,
        licencia,
    } = useContext(DataUserContext);

    const [isButtonEnabled, setIsButtonEnabled] = useState(false)
    useEffect(() => {
        if (userName.length > 0 && document.length > 0 && registrationCode.length > 0) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [userName, document, registrationCode]);

    
    async function handleSubmit () {
    const res = await getLicenciaId(licencia.registrationCode)

    if (res.data.length>0){
        const Licencia = {
            storagelicencia: res.data[0].codlincencia,
            storageCuenta: res.data[0].cuenta,
            storageCentral: res.data[0].central, 
            storageAsignada: res.data[0].asignada,       
            storagecodmovil: res.data[0].codmovil,
            storageId: res.data[0]._id
        }
        
        console.log(res.data[0]._id, licencia)
    }
}




function saveData(){
    setUserName("");
    setDocument("");
    setRegistrationCode("");
    console.log(licencia)
    handleSubmit();
    
    }


    // function saveData() {
    //     setUserName("");
    //     setDocument("");
    //     setRegistrationCode("");
    //     storeData(dataUser);
    //     console.log(dataUser);
    //     navigation.navigate("Principal");
    // }
    // const saveData = async () => { 
    //     const res = await getLicenciaId(registrationCode.codlincencia);
    
    //     if (res.data.length > 0) {
    //       const Licencia = {
    //         storagelicencia: res.data[0].codlincencia,
    //         storageCuenta: res.data[0].cuenta,
    //         storageCentral: res.data[0].central, 
    //         storageAsignada: res.data[0].asignada,       
    //         storagecodmovil: res.data[0].codmovil,
    //         storageId: res.data[0]._id
    //       }  
    //       await AsyncStorage.setItem("LicenciaSave", JSON.stringify(Licencia));
    //       //console.log(res.data[0]._id, licencias)
    //       await updateLicencia(res.data[0]._id, registrationCode) 
    //       navigation.replace('Principal')      
    //     } else {
    //         console.log('CONFIGU', res.data)
    //     }   
        
    //   }  
      
     
    
    
    
    function modalHandler() {

        if (fetchedData.length > 0) {
            navigation.navigate("User");
        } else {
            alert('No hay datos disponibles aún.');
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <>
                    <IconButton title="Tap me" onPress={modalHandler} />
                </>
            }
        });
    }, [navigation, modalHandler]);

    return (
        <ImageBackground
            source={require('../assets/126353.jpg')}
            resizeMode="cover"
            style={styles.rootScreen}
        >
            <DataList setUserName={setUserName} setDocument={setDocument} setRegistrationCode={setRegistrationCode} userName={userName} document={document} registrationCode={registrationCode} />
            <View style={styles.buttonContainer}>
                <SaveButton onPress={saveData} isEnabled={isButtonEnabled} />
            </View>
        </ImageBackground>
    );
}
export default Configuration;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    buttonContainer: {
        marginTop: 210,
    },
})