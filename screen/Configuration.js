import { View, Text, TextInput, ActivityIndicator, Platform, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { postUserData } from "../util/Api";
import { MaterialIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";

import SaveButton from "../component/SaveButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Configuration() {
const {width,height} = Dimensions.get("window")
    const navigation = useNavigation();
    const [licencias, setLicencias] = useState({
        panicAppCode: "",
        targetDeviceCode: "",
        accountNumber: "",
        Nombre: "",
        Apellido: "",
        Documento: "",
        Direccion: "",
        Barrio: ""
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [result, setResult] = useState(null)
    const [isButtonEnabled, setIsButtonEnabled] = useState(false)
    const [isContinueButtonEnabled, setContinueButtonEnabled] = useState(false)

    useEffect(() => {
        if (licencias.panicAppCode && licencias.targetDeviceCode && licencias.accountNumber) {
            setContinueButtonEnabled(true);
        } else {
            setContinueButtonEnabled(false);
        }
    }, [licencias]); // <- Agregar dependencias
    useEffect(() => {
        if (licencias.Nombre && licencias.Apellido && licencias.Documento && licencias.Direccion && licencias.Barrio) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [licencias]);

    useEffect(() => {
        console.log("Ejecutando useEffect para recuperar datos de AsyncStorage");
        const fetchStoredData = async () => {
            try {
                const storedData = await AsyncStorage.getItem('@licencias');
                if (storedData !== null) {
                    const parsedData = JSON.parse(storedData);
                    
                    // Extrae un dato específico (ejemplo: `accountNumber`)
                    const accountNumber = parsedData?.accountNumber;
                    
                    if (accountNumber) {
                        console.log("Número de cuenta recuperado:", accountNumber);
                        
                        // Realiza una segunda consulta usando el dato recuperado
                        const secondResponse = await postUserData({ accountNumber });
                        console.log("Segunda consulta respuesta:", secondResponse);
                    }
                }
            } catch (error) {
                console.error("Error al recuperar datos de AsyncStorage:", error);
            }
        };
    
        fetchStoredData();
    }, []);

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (name, value) => {
        setLicencias({ ...licencias, [name]: value });
    }
    const saveData = async () => {
        // Construir el array que espera el servidor
        const data = {
            panicAppCode: licencias.panicAppCode,
            targetDeviceCode: licencias.targetDeviceCode,
            accountNumber: licencias.accountNumber,
            userCustomFields: [
                {
                    Nombre: licencias.Nombre
                },
                {
                    Apellido: licencias.Apellido
                },
                {
                    Documento: licencias.Documento
                },
                {
                    Direccion: licencias.Direccion
                },
                {
                    Barrio: licencias.Barrio
                }
            ]
        }
        try {
            setIsLoading(true);
            console.log('Datos enviados al servidor:', data);
            const result = await postUserData(data);  // Enviar el array
            setResult(result);
            await AsyncStorage.setItem('@licencias', JSON.stringify(result));
            console.log("Datos Guardados");
            navigation.replace('Principal');

            console.log('Respuesta del servidor:', result);
        } catch (error) {
            console.error('Error al hacer el POST:', error);
            alert("Datos Inválidos")
        } finally {
            setIsLoading(false);
        }
    
    };

   
    // Función para avanzar al siguiente paso
    const nextStep = () => {
        if (currentStep < 2) setCurrentStep(currentStep + 1);
        if (isContinueButtonEnabled == false) {
            alert("Complete los campos")
        }
    };
    // Función para retroceder al paso anterior
    const previousStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    // Renderizado condicional basado en el paso actual
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <View style = {styles.title}>
                            <Text style = {styles.titleText}>Ingrese las Credenciales</Text>
                        </View>
                        <View style={styles.imputContainer}>
                            <View>
                                <View style={styles.textContainer}>
                                    <TextInput
                                        style={styles.textImput}
                                        placeholder='Ingrese el código'
                                        placeholderTextColor="#616060"
                                        onChangeText={(text) => handleChange("panicAppCode", text)}
                                        value={licencias.panicAppCode}
                                    />
                                    <MaterialIcons name={"vpn-key"} size={24} color="#000" style={styles.icon} />
                                </View>
                            </View>
                            <View>
                                <View style={styles.textContainer}>
                                    <TextInput
                                        style={styles.textImput}
                                        placeholder='Ingrese número de equipo'
                                        placeholderTextColor="#616060"
                                        onChangeText={(text) => handleChange("targetDeviceCode", text)}
                                        value={licencias.targetDeviceCode}
                                    />
                                    <MaterialIcons name={"vpn-key"} size={24} color="#000" style={styles.icon} />
                                </View>
                            </View>
                            <View>
                                <View style={styles.textContainer}>
                                    <TextInput
                                        style={styles.textImput}
                                        placeholder='Ingrese número de cuenta'
                                        placeholderTextColor="#616060"
                                        onChangeText={(text) => handleChange("accountNumber", text)}
                                        value={licencias.accountNumber}
                                    />
                                    <MaterialIcons name={"vpn-key"} size={24} color="#000" style={styles.icon} />
                                </View>
                            </View>
                        </View>
                    </>
                );
            case 2:
                return (
                    <>
                        <KeyboardAwareScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            enableOnAndroid={true}
                            extraHeight={150}>
                            <View style={styles.imputContainer}>
                                <View>
                                    <View style={styles.textContainer}>
                                        <TextInput
                                            style={styles.textImput}
                                            placeholder='Ingrese su nombre'
                                            placeholderTextColor="#616060"
                                            onChangeText={(text) => handleChange("Nombre", text)}
                                            value={licencias.Nombre}
                                        />
                                        <MaterialIcons name={"person"} size={24} color="#000" style={styles.icon} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.textContainer}>
                                        <TextInput
                                            style={styles.textImput}
                                            placeholder='Ingrese su apellido'
                                            placeholderTextColor="#616060"
                                            onChangeText={(text) => handleChange("Apellido", text)}
                                            value={licencias.Apellido}
                                        />
                                        <MaterialIcons name={"person"} size={24} color="#000" style={styles.icon} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.textContainer}>
                                        <TextInput
                                            style={styles.textImput}
                                            placeholder='Ingrese su documento'
                                            placeholderTextColor="#616060"
                                            onChangeText={(text) => handleChange("Documento", text)}
                                            value={licencias.Documento}
                                        />
                                        <MaterialIcons name={"subtitles"} size={24} color="#000" style={styles.icon} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.textContainer}>
                                        <TextInput
                                            style={styles.textImput}
                                            placeholder='Ingrese su dirección'
                                            placeholderTextColor="#616060"
                                            onChangeText={(text) => handleChange("Direccion", text)}
                                            value={licencias.Direccion}
                                        />
                                        <MaterialIcons name={"location-on"} size={24} color="#000" style={styles.icon} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.textContainer}>
                                        <TextInput
                                            style={styles.textImput}
                                            placeholder='Ingrese su barrio'
                                            placeholderTextColor="#616060"
                                            onChangeText={(text) => handleChange("Barrio", text)}
                                            value={licencias.Barrio}
                                        />
                                        <MaterialIcons name={"location-on"} size={24} color="#000" style={styles.icon} />
                                    </View>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <>
            {isLoading ? (
                <View style={styles.containerActivity}>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>
            ) : (
                <>
                    <View >
                        {renderStep()}
                    </View>
                    {currentStep > 1 && (
                        <View style={styles.buttonContainer1}>
                            <Pressable
                                onPress={previousStep}
                                style={styles.button1}
                            >
                                <View style={styles.iconContainer}>
                                    <MaterialIcons name={"arrow-back"} size={24} color="#ffffff" style={styles.icon2} />
                                    <Text style={styles.textButton}>ANTERIOR</Text>
                                </View>
                            </Pressable>
                        </View>
                    )}
                    {currentStep < 2 ? (
                        <View style={styles.buttonContainer1}>
                            <Pressable
                                onPress={nextStep}
                                style={styles.button1}
                                disabled={!isContinueButtonEnabled}
                            >
                                <View style={styles.iconContainer}>
                                    <Text style={styles.textButton}>SIGUIENTE</Text>
                                    <MaterialIcons name={"arrow-forward"} size={24} color="#ffffff" style={styles.icon} />
                                </View>
                            </Pressable>
                        </View>
                    ) : (
                        <View style={styles.button}>
                            <SaveButton onPress={saveData} isEnabled={isButtonEnabled} />
                        </View>
                    )}
                </>
            )}
        </>
    );
}

export default Configuration;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    button: {
        marginTop: 55,
        alignSelf: "stretch",
    },
    imputContainer: {
        padding: 20,
        marginTop: 5
    },
    textContainer: {
        marginTop: 3,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#ffffff",
        backgroundColor: "#ffffff",
        borderRadius: 6,
    },
    textImput: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ffffff",
        backgroundColor: "#ffffff",
        width: "100%",
        padding: 12,
        color: "#120438",
        borderRadius: 6,
    },
    icon: {
        marginRight: 10,
    },
    containerActivity: {
        flex: 1,
        justifyContent: 'center',
    },
    button2: {
        marginTop: 10,
        width: 189,
        height: 100,
        marginLeft: 215,
    },
    buttonContainer1: {
        marginTop: 10,
        marginLeft: 150,
        alignItems: "center",
    },
    button1: {
        padding: 10,
        width: "90%",
        height: 45,
        margin: 8,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#009CDE',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        alignItems: "center",
        opacity: 0.9
    },
    textButton: {
        color: "white",
        fontSize: 15,
        width: "100%",
        textAlign: "center",
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "stretch"
    },
    icon2: {
        marginLeft: 10
    },
    title:{
        marginTop:10,
        marginLeft:21,
    },
    titleText:{
        fontSize: 17,
        fontFamily: "open-sans-bold",
    }
})