import { View,Pressable, StyleSheet} from "react-native"
import {Ionicons} from "@expo/vector-icons";


function SecondaryButton({ onPress, name,styles}) {
    return <View >
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styless.pressed}>
            <View style={styles}>
               <Ionicons name={name} size={40} color="white"/>
            </View>
        </Pressable>
    </View>
}

export default SecondaryButton;

const styless = StyleSheet.create({
    pressed: {
        opacity: 0.5
    }
})