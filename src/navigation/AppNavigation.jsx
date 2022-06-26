import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpenseScreen from "../screens/ManageExpenses/ManageExpenseScreen";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="ExpensesOverview" 
                        component={TabNavigation}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen name="ManageExpense" component={ManageExpenseScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
}
