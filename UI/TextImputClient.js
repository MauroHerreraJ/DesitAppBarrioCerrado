import { useState } from "react";
import { StyleSheet, TextInput,View } from "react-native";

function TextImputClient(props) {

    const [enteredConfigText, setEnteredText] = useState("");

    function InputHandler(enteredText) {
        setEnteredText(enteredText);
        props.save(enteredConfigText)

    }

    

   
    return (
        <View style={styles.textContainer}>
        <TextInput
            style={styles.textImput}
            placeholder={props.text}
            onChangeText={InputHandler}
        />
        </View>
    );

}
export default TextImputClient;

const styles = StyleSheet.create({
    textImput:{
        borderWidth: 1,
        borderColor:"#dbd9df",
        backgroundColor:"#dbd9df",
        width:"100%",
        padding: 12,
        color:"#120438",
        borderRadius:6,
        
    },
    textContainer:{
        marginTop:3,
        marginBottom:15
        

    },
})