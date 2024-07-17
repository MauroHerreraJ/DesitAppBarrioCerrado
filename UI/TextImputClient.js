import { useState } from "react";
import { StyleSheet, TextInput, View,Pressable } from "react-native"

function TextImputClient({text,onAddData}) {

    const [enteredConfigText, setEnteredText] = useState("");


    function InputHandler(enteredText) {
        setEnteredText(enteredText);

    }

    function addDataHandler(){
        onAddData(enteredConfigText);
        setEnteredText("");
      }


    return (
                <Pressable onPress={addDataHandler} style={({ pressed }) => pressed && styles.pressed}>
        <View style={styles.textContainer}>
                <TextInput
                    style={styles.textImput}
                    placeholder={text}
                    onChangeText={InputHandler}
                    value={enteredConfigText}
                />

            </View>
        </Pressable>

    );

}
export default TextImputClient;

const styles = StyleSheet.create({
    textImput: {
        borderWidth: 1,
        borderColor: "#dbd9df",
        backgroundColor: "#dbd9df",
        width: "100%",
        padding: 12,
        color: "#120438",
        borderRadius: 6,

    },
    textContainer: {
        marginTop: 3,
        marginBottom: 15
    },
    pressed: {
        opacity: 0.7
    }
})