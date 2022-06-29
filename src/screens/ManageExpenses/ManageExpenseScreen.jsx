import { useContext, useLayoutEffect } from "react";
import { Colors } from "../../constants/Colors";
import { ExpensesContext } from "../../store/expenses-context";

import CustomButton from "../../components/UI/CustomButton/CustomButton";
import styles from "./ManageExpensesScreen.style";
import IconButton from "../../components/UI/IconButton/IconButton";
import ExpenseManage from "../../components/ExpenseManage/ExpenseManage";
import { View } from "react-native";


export default function ManageExpenseScreen({ route, navigation }) {
    const id = route.params?.expenseId;
    const isEditing = !!id;
    const expensesContext = useContext(ExpensesContext);


    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    },[navigation,isEditing]);
    
    function deleteExpense(){
        expensesContext.removeExpense(id);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        if(isEditing){
            expensesContext.updateExpense(id,expenseData);
        } else { 
            expensesContext.addExpense(expenseData);
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseManage 
                onCancel={cancelHandler} 
                submitButtonLabel={isEditing ? 'Update' : 'Add'} 
                onSubmit={confirmHandler}
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
