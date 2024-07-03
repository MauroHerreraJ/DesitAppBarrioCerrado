import { View,Text, Pressable, StyleSheet,Platform } from "react-native"

function PrimaryButton ({onPress}){
    return <View >
        <Pressable  onPress={onPress} style={({pressed})=> pressed && styles.pressed }>
            <View style={styles.buttonContainer}>
            <Text>Touch!</Text>
            </View>
        </Pressable> 
        </View>
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer:{
        padding:130,
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        alignItems:"center"
    },
    pressed:{
        opacity:0.5
    }
})