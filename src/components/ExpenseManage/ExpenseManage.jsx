import { useState } from 'react';
import { Text, View } from 'react-native';
import CustomButton from '../UI/CustomButton/CustomButton';
import Input from '../UI/Input/Input';
import styles from './ExpenseManage.style';

export default function ExpenseManage({onCancel,onSubmit,submitButtonLabel}) {
    const [inputValues,setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    function inputChangeHandler(inputIdentifier,enteredValue){
        setInputValues((currentInput) => {
            return { 
                ...currentInput,
                [inputIdentifier]: enteredValue
            };
        });
    }
    
    function submitHandler(){
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }

        onSubmit(expenseData);
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input 
                    label="Amount"
                    style={styles.rowInput}
                    inputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText:  inputChangeHandler.bind(this,'amount'),
                        value: inputValues.amount
                    }}
                />
                <Input 
                    label="Date" 
                    style={styles.rowInput}
                    inputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        placeholderTextColor: '#f06577',
                        onChangeText: inputChangeHandler.bind(this,'date'),
                        value: inputValues.date,
                        maxLength: 10,
                    }}
                />
            </View>
            <Input 
                label="Description"
                inputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this,'description'),
                    value: inputValues.description
                }}
            />
            <View style={styles.buttonContainer}>
                <CustomButton style={styles.buttonStyle} mode="flat" onPress={onCancel}>Cancel</CustomButton>
                <CustomButton style={styles.buttonStyle} onPress={submitHandler}>{submitButtonLabel}</CustomButton>
            </View>
        </View>
    )
}
