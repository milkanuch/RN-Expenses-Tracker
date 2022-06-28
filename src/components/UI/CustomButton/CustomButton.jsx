import { Pressable, Text, View } from "react-native";
import styles from "./CustomButton.style";

export default function CustomButton({children,onPress,mode,style}){ 
    return ( 
        <View style={style}> 
            <Pressable onPress={onPress} android_ripple={{color: '#f0f0f0'}}> 
                <View style={[styles.button, mode ==='flat' && styles.flat]}> 
                    <Text style={[styles.buttonText,mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}