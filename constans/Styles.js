import { StyleSheet,Platform } from "react-native";

export const styles1=StyleSheet.create({
    buttonContainer: {
        padding: 16,
        margin:8, 
        borderRadius: 8,
        paddingVertical:35,
        paddingHorizontal:71,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#f57711',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        alignItems: "center"
    },
})


export const styles2=StyleSheet.create({
    buttonContainer: {
        padding: 16,
        margin:8, 
        borderRadius: 8,
        paddingVertical:35,
        paddingHorizontal:71,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: '#1ccc39',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        alignItems: "center"
    },
})