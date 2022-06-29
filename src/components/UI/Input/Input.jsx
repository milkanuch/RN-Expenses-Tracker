import { Text, TextInput, View } from "react-native";
import styles from "./Input.style";

export default function Input({ label,invalid,style,inputConfig }) {
    let inputStyle = [styles.input];

    if(inputConfig && inputConfig.multiline){
        inputStyle.push(styles.inputMultiLine);
    }

    if(invalid){
        inputStyle.push(styles.invalidInput)
    }
    
    return (
        <View style={[styles.inputContainer,style]}>
            <Text style={[styles.label,invalid && styles.invalidLabel]}> {label} </Text>
            <TextInput  
                style={inputStyle} 
                {...inputConfig}
            />
        </View>
    );
}
