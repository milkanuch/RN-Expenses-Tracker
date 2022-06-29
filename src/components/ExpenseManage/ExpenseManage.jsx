import { View } from 'react-native';
import Input from '../UI/Input/Input';

export default function ExpenseManage() {
    function amountChangeHandler(){

    }

    return (
        <View>
            <Input 
                label="Amount"
                inputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText:  amountChangeHandler,
                }}
            />
            <Input 
                label="Date" 
                inputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    placeholderTextColor: '#f0f0f0',
                    maxLength: 10,
                    onChangeText: () => {},
                }}
            />
            <Input 
                label="Description"
                inputConfig={{
                    multiline: true
                }}
            />
        </View>
    )
}
