import { Text, View } from "react-native";

export default function ManageExpenseScreen({ route }) {
  const id = route.params.expenseId;

  return (
    <View>
        <Text>
            { id }
        </Text>
    </View>
  )
}
