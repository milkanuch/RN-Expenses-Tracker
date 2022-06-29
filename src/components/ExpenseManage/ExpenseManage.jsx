import { useState } from 'react';
import { Text, View } from 'react-native';

import moment from 'moment';
import CustomButton from '../UI/CustomButton/CustomButton';
import Input from '../UI/Input/Input';
import styles from './ExpenseManage.style';

export default function ExpenseManage({onCancel,onSubmit,submitButtonLabel,defaultValues}) {
    const [inputs,setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? defaultValues.date.toISOString().slice(0,10) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    });

    function inputChangeHandler(inputIdentifier,enteredValue){
        setInputs((currentInput) => {
            return { 
                ...currentInput,
                [inputIdentifier]: {
                    value: enteredValue, isValid: true
                }
            };
        });
    }
    
    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }

        const amountIsValid = !isNaN(inputs.amount.value) && inputs.amount.value > 0;
        const dateIsValid = moment(inputs.date.value,'YYYY-MM-DD').isValid();
        const descriptionIsValid = inputs.description.value.trim().length > 0;

        if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setInputs((curInputs) => {
                return { 
                    amount: {
                        value: curInputs.amount.value,
                        isValid: amountIsValid
                    },
                    date: {
                        value: curInputs.date.value,
                        isValid: dateIsValid
                    },
                    description: {
                        value: curInputs.description.value,
                        isValid: descriptionIsValid
                    }
                }
            });
            return;
        }

        onSubmit(expenseData);
    }

    const inputIsValid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input 
                    label="Amount"
                    invalid={!inputs.amount.isValid}
                    style={styles.rowInput}
                    inputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText:  inputChangeHandler.bind(this,'amount'),
                        value: inputs.amount.value
                    }}
                />

                <Input 
                    label="Date"
                    invalid={!inputs.date.isValid} 
                    style={styles.rowInput}
                    inputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        placeholderTextColor: '#f06577',
                        onChangeText: inputChangeHandler.bind(this,'date'),
                        value: inputs.date.value,
                        maxLength: 10,
                    }}
                />
            </View>

            <Input 
                label="Description"
                invalid={!inputs.description.isValid}
                inputConfig={{
                    multiline: true,
                    onChangeText: inputChangeHandler.bind(this,'description'),
                    value: inputs.description.value
                }}
            />
            {  inputIsValid && (<Text style={styles.errorText} >Invalid input values - please check ur entered data!</Text>)}
            <View style={styles.buttonContainer}>
                <CustomButton style={styles.buttonStyle} mode="flat" onPress={onCancel}>Cancel</CustomButton>
                <CustomButton style={styles.buttonStyle} onPress={submitHandler}>{submitButtonLabel}</CustomButton>
            </View>
        </View>
    )
}
