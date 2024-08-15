import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground, StyleSheet } from "react-native";
import { useData } from "../component/store/context/serverData-context";

import DataList from "../component/DataList";
import IconButton from "../UI/IconButton";

function Configuration() {

    const navigation = useNavigation();
    const {fetchedData} = useData();
   
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