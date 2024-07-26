import { useLayoutEffect, useState } from "react";
import DataList from "../component/DataList";
import IconButton from "../component/IconButton";
import MyModal from "../component/MyModal";

function Configuration({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);

    function modalHandler() {
        setModalVisible(true);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <>
                    <IconButton title="Tap me" onPress={modalHandler} />
                    <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                </>
            }
        });
    }, [navigation, modalHandler]);

    return (
        <DataList />
    );
}
export default Configuration; 