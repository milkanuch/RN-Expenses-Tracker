import { Text, View } from "react-native";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";
import styles from "./ExpensesOutput.style";

export default function ExpensesOutput({ expenses,expensesPeriod,fallbackText}) {
    return (
        <View style={ styles.container }>
            <ExpensesSummary expenses={expenses} period={expensesPeriod} />
            {
                expenses.length > 0 ? 
                <ExpensesList expenses={expenses} /> :
                <Text style={styles.infoText}>{fallbackText}</Text>
            }
        </View>
    );
}
