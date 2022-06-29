import { useContext, useLayoutEffect } from "react";
import { View } from "react-native";
import { Colors } from "../../constants/Colors";

import CustomButton from "../../components/UI/CustomButton/CustomButton";
import styles from "./ManageExpensesScreen.style";
import IconButton from "../../components/UI/IconButton/IconButton";
import { ExpensesContext } from "../../store/expenses-context";

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

    function confirmHandler() {
        if(isEditing){
            expensesContext.updateExpense(id,{
                description: 'Test!!!',
                amount: 666,
                date: new Date('2022-06-20')
            });
        } else { 
            expensesContext.addExpense({
                description: 'Test',
                amount: 999,
                date: new Date('2022-06-19')
            });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <CustomButton style={styles.buttonStyle} mode="flat" onPress={cancelHandler} >Cancel</CustomButton>
                <CustomButton style={styles.buttonStyle} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</CustomButton>
            </View>
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
