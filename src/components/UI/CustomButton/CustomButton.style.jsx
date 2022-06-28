import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export default StyleSheet.create({ 
    button: { 
        borderRadius: 4,
        padding: 8,
        backgroundColor: Colors.primary500,
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: { 
        color: '#f0f0f0',
        textAlign: 'center',
    },
    flatText: { 
        color: Colors.primary200
    },
    pressed: { 
        opacity: 0.75,
        backgroundColor: Colors.primary100,
        borderRadius: 4
    }
});