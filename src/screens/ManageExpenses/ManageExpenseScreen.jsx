import { useContext, useLayoutEffect } from "react";
import { Colors } from "../../constants/Colors";
import { ExpensesContext } from "../../store/expenses-context";
import { View } from "react-native";

import styles from "./ManageExpensesScreen.style";
import IconButton from "../../components/UI/IconButton/IconButton";
import ExpenseManage from "../../components/ExpenseManage/ExpenseManage";
import storeExpense, { delExpense, updateExpense, upgradeExpense } from "../../utils/https/https";


export default function ManageExpenseScreen({ route, navigation }) {
    const id = route.params?.expenseId;
    const isEditing = !!id;
    const expensesContext = useContext(ExpensesContext);
    const selectedExpense = expensesContext.expenses.find(expense => expense.id === id);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    },[navigation,isEditing]);
    
    function deleteExpense(){
        expensesContext.removeExpense(id);
        delExpense(id);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenseData) {
        if(isEditing) {
            expensesContext.updateExpense(id, expenseData);
            await upgradeExpense(id, expenseData);
        } else {
            const id = await storeExpense(expenseData); 
            expensesContext.addExpense({...expenseData, id: id});
        }
        navigation.goBack();
    }

    return (
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
    )
}
