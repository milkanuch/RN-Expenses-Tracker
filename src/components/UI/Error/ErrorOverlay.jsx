import { Text, View } from "react-native";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./ErrorOverlay.style";

export default function ErrorOverlay({message,onConfirm}) {
    return ( 
        <View style={styles.container}>
            <Text style={[styles.text,styles.title]}>An error occurred</Text>
            <Text style={styles.text}>{ message }</Text>
            <CustomButton onPress={ onConfirm }>Okey</CustomButton>
        </View>
    );
}