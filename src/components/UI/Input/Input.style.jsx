import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({
    inputContainer: { 
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: { 
        fontSize: 14,
        color: Colors.primary100,
        marginBottom: 4
    },
    input: { 
        backgroundColor: Colors.primary100,
        color: Colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiLine: { 
        minHeight: 100,
        textAlignVertical: 'top',
    }
});