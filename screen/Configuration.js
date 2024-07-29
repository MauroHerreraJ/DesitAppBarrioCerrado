import { useLayoutEffect} from "react";
import { useNavigation } from "@react-navigation/native";
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
        <DataList />
    );
}
export default Configuration; 