import { View,TouchableOpacity,Text } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet } from "react-native";
import { useData } from "../store/serverData-context";
import { DataUserContext } from "../store/dataUser-context";
import { storeData } from "../util/http";
import { useState, useEffect, useContext } from "react";
import { GlobalStyles } from "../constans/Colors";
import { getLicenciaId, updateLicencia } from "../util/Api";


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
        licencias,
    } = useContext(DataUserContext);

    const [isButtonEnabled, setIsButtonEnabled] = useState(false)
    useEffect(() => {
        if (userName.length > 0 && document.length > 0 && registrationCode.length > 0) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [userName, document, registrationCode]);

    const handleSubmit = async () => { 
        const res = await getLicenciaId(licencias.registrationCode);
        if (res.data.length > 0) {
            const Licencia = {
              storagelicencia: res.data[0].codlincencia,
              storageCuenta: res.data[0].cuenta,
              storageCentral: res.data[0].central, 
              storageAsignada: res.data[0].asignada,       
              storagecodmovil: res.data[0].codmovil,
              storageId: res.data[0]._id
            }  

            await updateLicencia(res.data[0]._id, licencias)

        }else{console.log("No se encuentran datos")}
    
    }

    const storeDataAsync = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@licencias', jsonValue); // Guarda bajo la clave '@dataUser'
            console.log('Datos guardados correctamente en AsyncStorage');
        } catch (e) {
            console.log('Error al guardar en AsyncStorage', e);
        }
    };
    
  

    function saveData() {
        setUserName("");
        setDocument("");
        setRegistrationCode("");
        handleSubmit();
        //storeDataAsync(licencias)
        //storeData(licencias);
        console.log(licencias);
       //navigation.navigate("Principal");
    }
  


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

    const Borrar = async () => {
        await AsyncStorage.removeItem('@licencias')
        dispatch(authMode(false));  
        console.log('borrado')
        }    
    

    return (
        <ImageBackground
            source={require('../assets/126353.jpg')}
            resizeMode="cover"
            style={styles.rootScreen}
        >
            <DataList setUserName={setUserName} setDocument={setDocument} setRegistrationCode={setRegistrationCode} userName={userName} document={document} registrationCode={registrationCode} />
            <View style={styles.buttonContainer1}>
            <TouchableOpacity style={styles.buttonUpdateI} onPress={Borrar}>
            <Text>Borrar</Text>
            </TouchableOpacity>
        </View>
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
    buttonUpdateI: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginTop: 30,      
        backgroundColor: GlobalStyles.colors.inputcontainer,
        width: 120,
        alignContent: 'center'
      },
      buttonContainer: {            
        marginHorizontal: 1,
        marginTop: 130,
      },
    
})