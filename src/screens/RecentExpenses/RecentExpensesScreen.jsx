import { useContext, useEffect, useState } from 'react';
import { ExpensesContext } from '../../store/expenses-context';
import { getDateMinusDays } from '../../utils/date/date';
import { fetchExpenses } from '../../utils/https/https';
import ExpensesOutput from '../../components/ExpensesOutput/ExpensesOutput';
import LoadingOverlay from '../../components/UI/LoadingOverlay/LoadingOverlay';
import ErrorOverlay from '../../components/UI/Error/ErrorOverlay';

export default function RecentExpenses() {
    const expensesContext = useContext(ExpensesContext);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState();

    useEffect(()=> {
        async function getExpenses(){ 
            setLoading(true);
            try{ 
                const expenses = await fetchExpenses();
                expensesContext.setExpenses(expenses);
            } catch(error){
                setError('Could not fetch expenses!');
            }
            setLoading(false);
        }
        getExpenses();
    },[]);

    const recentExpenses = expensesContext.expenses.filter((expense) => { 
        const sevenDaysAgo = getDateMinusDays(new Date(),7);
        return (expense.date > sevenDaysAgo) && (expense.date <= new Date()) ;
    });

    function errorHandler(){
        setError(null);
    }

    if(error && !loading){
        return <ErrorOverlay message={error} onConfrim={errorHandler} />
    }

    return (
            loading ? 
            <LoadingOverlay /> :
            <ExpensesOutput 
                expenses={recentExpenses} 
                expensesPeriod="Last 7 Days" 
                fallbackText="No expenses registred for last 7 days" 
            />
        );
}
