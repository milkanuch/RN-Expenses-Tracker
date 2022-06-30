import { useContext, useLayoutEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { ExpensesContext } from "../../store/expenses-context";
import { View } from "react-native";

import styles from "./ManageExpensesScreen.style";
import IconButton from "../../components/UI/IconButton/IconButton";
import ExpenseManage from "../../components/ExpenseManage/ExpenseManage";
import storeExpense, { delExpense, updateExpense, upgradeExpense } from "../../utils/https/https";
import LoadingOverlay from "../../components/UI/LoadingOverlay/LoadingOverlay";
import ErrorOverlay from "../../components/UI/Error/ErrorOverlay";


export default function ManageExpenseScreen({ route, navigation }) {
    const [isSubmiting,setIsSubmiting] = useState(false);
    const [error,setError] = useState();

    const id = route.params?.expenseId;
    const isEditing = !!id;
    const expensesContext = useContext(ExpensesContext);
    const selectedExpense = expensesContext.expenses.find(expense => expense.id === id);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    },[navigation,isEditing]);
    
    async function deleteExpense() {
        setIsSubmiting(true);
        try { 
            await delExpense(id);
            expensesContext.removeExpense(id);
            navigation.goBack();
        } catch(error){ 
            setError('Could not save date - please try again later!');
            setIsSubmiting(false); 
        }   
    }

    async function confirmHandler(expenseData) {
        setIsSubmiting(true);
        try { 
            if(isEditing) {
                expensesContext.updateExpense(id, expenseData);
                await upgradeExpense(id, expenseData);
            } else {
                const id = await storeExpense(expenseData); 
                expensesContext.addExpense({...expenseData, id: id});
            }
            navigation.goBack();
        } catch(error){
            setError('Could not save date - please try again later!');
            setIsSubmiting(false); 
        }
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function errorHandler() {
        setError(null);
    }

    if(error && !isSubmiting){
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    }

    return (
        <>
            { isSubmiting ? 
                <LoadingOverlay /> : 
                <View style={styles.container}>
                    <ExpenseManage 
                        onCancel={cancelHandler} 
                        submitButtonLabel={isEditing ? 'Update' : 'Add'} 
                        onSubmit={confirmHandler}
                        defaultValues={selectedExpense}
                    />
                    {
                        isEditing && ( 
                            <View style={styles.deleteContainer} >
                                <IconButton 
                                    icon='trash' 
                                    color={Colors.error500} 
                                    size={36} 
                                    onPress={deleteExpense} 
                                />
                            </View> 
                        )
                    }
                </View>
            }
        </>
    )
}
