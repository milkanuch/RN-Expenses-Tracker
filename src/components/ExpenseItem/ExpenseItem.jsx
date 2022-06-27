import styles from "./ExpenseItem.style";
import { Pressable, Text, View } from 'react-native';
import { getFormattedDate } from "../../utils/date/date";

export default function ExpenseItem({ description,date,amount }) {
    function expenseHandler(){
        console.log("So expense");
    }
    return (
        <Pressable onPress={expenseHandler} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase,styles.description]}>{ description }</Text>
                    <Text style={styles.textBase}>{ getFormattedDate(date) }</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>${ amount.toFixed(2) }</Text>
                </View>
            </View>
        </Pressable>
    );
}
