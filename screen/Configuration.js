import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet } from "react-native";
import { useContext } from "react";
import { DataUserContext } from "../component/store/context/dataUser-context";

import DataList from "../component/DataList";
import IconButton from "../UI/IconButton";

function Configuration() {

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

    function modalHandler() {
        if(accountNumber.length > 0 && registrationCode.length > 0 && centralCode.length > 0){
            navigation.navigate("Config");
        } else{
            
            console.log("modal")
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
            <DataList />
        </ImageBackground>
    );
}
export default Configuration;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    }
})