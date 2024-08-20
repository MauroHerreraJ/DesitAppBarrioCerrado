import { View,TouchableOpacity,Text } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet } from "react-native";
import { useData } from "../component/store/context/serverData-context";
import { DataUserContext } from "../component/store/context/dataUser-context";
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

    const storeDataAsync = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@dataUser', jsonValue); // Guarda bajo la clave '@dataUser'
            console.log('Datos guardados correctamente en AsyncStorage');
        } catch (e) {
            console.log('Error al guardar en AsyncStorage', e);
        }
    };
    
  

    function saveData() {
        setUserName("");
        setDocument("");
        setRegistrationCode("");
        storeDataAsync(dataUser)
        storeData(dataUser);
        console.log(dataUser);
        navigation.navigate("Principal");
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
        await AsyncStorage.removeItem('@dataUser')
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