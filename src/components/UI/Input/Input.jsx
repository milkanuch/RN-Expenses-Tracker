import { Text, TextInput, View } from "react-native";
import styles from "./Input.style";

export default function Input({label,inputConfig}) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}> {label} </Text>
            <TextInput  
                style={
                    inputConfig && inputConfig.multiline ? 
                    [styles.input,styles.inputMultiLine] :
                    styles.input
                } 
                {...inputConfig}
            />
        </View>
    );
}
