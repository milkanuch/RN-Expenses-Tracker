import { useContext } from 'react';
import ExpensesOutput from '../../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../../store/expenses-context';
import { getDateMinusDays } from '../../utils/date/date';

export default function RecentExpenses() {
    const expensesContext = useContext(ExpensesContext);
    
    const recentExpenses = expensesContext.expenses.filter((expense) => { 
        const sevenDaysAgo = getDateMinusDays(new Date(),7);

        return (expense.date > sevenDaysAgo) && (expense.date <= new Date()) ;
    });

    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallbackText="No expenses registred for last 7 days" />
}
