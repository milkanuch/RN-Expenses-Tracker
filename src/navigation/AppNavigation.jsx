import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/Colors";
import ManageExpenseScreen from "../screens/ManageExpenses/ManageExpenseScreen";
import ExpensesContextProvider from "../store/expenses-context";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return (
            <ExpensesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator 
                        screenOptions={{
                            headerStyle: { backgroundColor: Colors.primary500 },
                            headerTintColor: '#f0f0f0'
                        }}
                    >
                        <Stack.Screen 
                            name="ExpensesOverview" 
                            component={TabNavigation}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen 
                            name="ManageExpense" 
                            component={ManageExpenseScreen}
                            options={{
                                presentation: 'modal'
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ExpensesContextProvider>
    );
}
