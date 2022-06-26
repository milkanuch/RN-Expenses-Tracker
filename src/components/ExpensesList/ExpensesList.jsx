import { FlatList } from 'react-native'
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function ExpensesList({ expenses }) {
    return (
        <FlatList 
            data={ expenses }
            renderItem={ExpenseItem}
            keyExtractor={ (item) => item.id }
        />
    );
}
