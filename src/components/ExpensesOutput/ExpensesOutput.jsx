import { View } from "react-native";
import { DUMMY_EXPENSES } from "../../constants/Dumy_Data";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesSummary from "../ExpensesSummary/ExpensesSummary";
import styles from "./ExpensesOutput.style";

export default function ExpensesOutput({ expenses,expensesPeriod, }) {
    return (
        <View style={ styles.container }>
            <ExpensesSummary expenses={expenses} period={expensesPeriod} />
            <ExpensesList expenses={expenses} />
        </View>
    );
}
