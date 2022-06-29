import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
    container: { 
        flex: 1,
        padding: 24,
        backgroundColor: Colors.primary800
    },
    deleteContainer: { 
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: Colors.primary200,
        alignItems: 'center',
    },
});