import React from 'react'
import { Text } from 'react-native'

export default function ExpenseItem(itemData) {
    return (
        <Text>  
            {itemData.item.description}
        </Text>
    )
}
