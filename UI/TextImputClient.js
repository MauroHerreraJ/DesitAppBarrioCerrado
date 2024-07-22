import { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native"

function TextImputClient({ text, onDattaChange }) {

    const [data, setData] = useState("");

    function InputHandler(enteredText) {
        setData(enteredText);
    }

    useEffect(() => {
        onDattaChange(data);
    }, [data]);

    return (
        <View style={styles.textContainer}>
            <TextInput
                style={styles.textImput}
                placeholder={text}
                onChangeText={InputHandler}
            />
        </View>
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