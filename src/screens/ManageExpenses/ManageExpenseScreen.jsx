import { useLayoutEffect } from "react";
import { View } from "react-native";
import { Colors } from "../../constants/Colors";

import CustomButton from "../../components/UI/CustomButton/CustomButton";
import styles from "./ManageExpensesScreen.style";
import IconButton from "../../components/UI/IconButton/IconButton";

export default function ManageExpenseScreen({ route, navigation }) {
    const id = route.params?.expenseId;
    const isEditing = !!id;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    },[navigation,isEditing]);
    
    function deleteExpense(){
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
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
