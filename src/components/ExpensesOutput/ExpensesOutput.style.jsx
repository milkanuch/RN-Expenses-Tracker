import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
    container: { 
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: Colors.primary700,
        
    },
    infoText: { 
        color: Colors.error500,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
});