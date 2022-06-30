import { ActivityIndicator, View } from "react-native";
import styles from "./LoadingOverlay.style";

export default function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#f0f0f0'/>
        </View>
    );
}