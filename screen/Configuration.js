import { useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import DataList from "../component/DataList";
import IconButton from "../UI/IconButton";


function Configuration() {
    
    const navigation = useNavigation();
    

    function modalHandler() {
        navigation.navigate("User");
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
        <ImageBackground source={require('../assets/126353.jpg')}
        resizeMode="cover"
        >
        <DataList />
        </ImageBackground>
    );
}
export default Configuration; 