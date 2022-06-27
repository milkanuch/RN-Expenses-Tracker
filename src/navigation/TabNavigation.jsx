import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../constants/Colors";

import Ionicons from '@expo/vector-icons/Ionicons';
import ExpensesScreen from "../screens/Expenses/ExpensesScreen";
import RecentExpenses from "../screens/RecentExpenses/RecentExpensesScreen";
import IconButton from "../components/UI/IconButton/IconButton";

const Tab = createBottomTabNavigator();
export default function TabNavigation(){
    return ( 
        <Tab.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: '#f0f0f0',
            tabBarStyle: { backgroundColor: Colors.primary500 },
            tabBarActiveTintColor: Colors.accent500,
            headerRight: ({tintColor}) =>
                (
                    <IconButton 
                        icon="add" 
                        size={24} 
                        color="#fff" 
                        onPress={() => {console.log("Plus")}} />
                )
            
        }}>
            <Tab.Screen 
                name="RecentExpenses" 
                component={ RecentExpenses } 
                options={{
                    title: 'Recent Expenses',
                    tabBarLabel: 'Recent',
                    tabBarIcon: ({ color,size }) => (
                        <Ionicons name="hourglass" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Expenses" 
                component={ ExpensesScreen } 
                options={{
                    title: 'All Expenses',
                    tabBarLabel: 'All',
                    tabBarIcon: ({ color,size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}