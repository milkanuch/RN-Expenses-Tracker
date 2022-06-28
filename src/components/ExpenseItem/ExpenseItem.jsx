import styles from "./ExpenseItem.style";
import { Pressable, Text, View } from 'react-native';
import { getFormattedDate } from "../../utils/date/date";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseItem({id, description,date,amount }) {
    const nav = useNavigation();

    function expenseHandler(){
        nav.navigate('ManageExpense',{
            expenseId: id
        });
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
