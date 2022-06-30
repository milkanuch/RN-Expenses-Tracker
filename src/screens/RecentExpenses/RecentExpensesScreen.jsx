import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../../store/expenses-context';
import { getDateMinusDays } from '../../utils/date/date';
import { fetchExpenses } from '../../utils/https/https';
import ExpensesOutput from '../../components/ExpensesOutput/ExpensesOutput';

export default function RecentExpenses() {
    const expensesContext = useContext(ExpensesContext);

    useEffect(()=> {
        async function getExpenses(){ 
            const expenses = await fetchExpenses();
            expensesContext.setExpenses(expenses);
        }
        getExpenses();
    },[]);

    const recentExpenses = expensesContext.expenses.filter((expense) => { 
        const sevenDaysAgo = getDateMinusDays(new Date(),7);
        return (expense.date > sevenDaysAgo) && (expense.date <= new Date()) ;
    });

    

    return <ExpensesOutput 
            expenses={recentExpenses} 
            expensesPeriod="Last 7 Days" 
            fallbackText="No expenses registred for last 7 days" 
        />
}
