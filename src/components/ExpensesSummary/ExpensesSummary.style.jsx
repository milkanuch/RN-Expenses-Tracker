import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
    container: { 
        padding: 8,
        backgroundColor: Colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },  
    period: { 
        fontSize: 12,
        color: Colors.primary400
    },
    sum: { 
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.primary500
    }
});