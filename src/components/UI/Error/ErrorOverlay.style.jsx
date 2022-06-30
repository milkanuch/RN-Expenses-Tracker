import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary700
    },
    text: { 
        color: Colors.error50,
        textAlign: 'center',
        marginBottom: 8
    },
    title: { 
        color: Colors.error500,
        fontSize: 20,
        fontWeight: 'bold'
    },
})