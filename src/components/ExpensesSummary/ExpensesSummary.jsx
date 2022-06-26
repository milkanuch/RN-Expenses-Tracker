import { Text, View } from "react-native";
import styles from "./ExpensesSummary.style";

export default function ExpensesSummary({period,expenses}) {
    const expenseSum = expenses.reduce((sum,expense) => {
        return sum + expense.amount
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{ period }</Text>
            <Text style={styles.sum}>${ expenseSum.toFixed(2) }</Text>
        </View>
    );
}
