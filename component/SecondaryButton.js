import { View,Pressable, StyleSheet, Platform } from "react-native"
import {Ionicons} from "@expo/vector-icons";

function SecondaryButton({ onPress }) {
    return <View >
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
               <Ionicons name="warning" size={40} color="white"/>
            </View>
        </Pressable>
    </View>
}

export default SecondaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 16,
        margin:20,
        borderRadius: 8,
        paddingVertical:8,
        paddingHorizontal:60,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#1824d1',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        alignItems: "center"
    },
    pressed: {
        opacity: 0.5
    }
})