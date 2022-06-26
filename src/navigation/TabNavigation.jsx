import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../constants/Colors";

import Ionicons from '@expo/vector-icons/Ionicons';
import ExpensesScreen from "../screens/Expenses/ExpensesScreen";
import RecentExpenses from "../screens/RecentExpenses/RecentExpensesScreen";

const Tab = createBottomTabNavigator();
export default function TabNavigation(){
    return ( 
        <Tab.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: '#f0f0f0',
            tabBarStyle: { backgroundColor: Colors.primary500 },
            tabBarActiveTintColor: Colors.accent500
        }}>
            <Tab.Screen 
                name="RecentExpenses" 
                component={ RecentExpenses } 
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: () => (
                        <Ionicons size={24} name="hourglass" color={'#e36b94'} />
                    )
                }}
            />
            <Tab.Screen 
                name="Expenses" 
                component={ ExpensesScreen } 
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All',
                    tabBarIcon: () => (
                        <Ionicons size={24} name="calendar" color={'#e36b94'} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}