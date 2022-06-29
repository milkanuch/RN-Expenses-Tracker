import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export default StyleSheet.create({
    form: { 
        marginTop: 50,
    },
    title: { 
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.error50,
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: { 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    buttonContainer: { 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: { 
        minWidth: 120,
        marginHorizontal: 8
    },
    errorText: { 
        textAlign: 'center',
        color: Colors.error500,
        margin: 8
    }
});