import { Pressable, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./IconButton.style";

export default function IconButton({ icon,size,color,onPress }){
    return ( 
        <Pressable onPress={onPress} style={(pressed) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Ionicons name={icon} size={size} color={color} />
            </View>
        </Pressable>
    );
}