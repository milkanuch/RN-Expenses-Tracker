import { useContext } from "react";
import ExpensesOutput from "../../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../../store/expenses-context";

export default function ExpensesScreen() {
	const expensesContext = useContext(ExpensesContext);
	return <ExpensesOutput expenses={expensesContext.expenses} expensesPeriod="total" />
}   
