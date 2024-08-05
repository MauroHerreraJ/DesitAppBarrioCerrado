import { View,Text, Button} from "react-native";

function Welcome({navigation}){

    function pressHandler(){
        navigation.navigate("Principal");
    }
    return(
        <View>
            <Text>Bienvenido!</Text>
            <View>
            <Button title="Continuar"  onPress={pressHandler}/>
            </View>
            </View>
    )
}

export default Welcome;

