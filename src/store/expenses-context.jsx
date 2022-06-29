import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../constants/Dumy_Data";

export const ExpensesContext = createContext({ 
    expenses: [],
    addExpense: ({description,amount,date}) => {},
    updateExpense: (id,{description,amount,date}) => {},
    removeExpense: (id) => {},
});

function expensesReducer(state,action){
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();    
            return [{...action.payload,id: id},...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = {...state[updatableExpenseIndex],...action.payload.data};

            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

export default function ExpensesContextProvider({ children }){
    const [expensesState,dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    function addExpense(expenseData){ 
        dispatch({type: 'ADD',payload: expenseData });
    }

    function updateExpense(id,expenseData){
        dispatch({ type: 'UPDATE',payload: { id: id,data: expenseData}});
    }   

    function removeExpense(id){
        dispatch({type: 'DELETE',payload: id});
    }

    const value = { 
        expenses: expensesState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        removeExpense: removeExpense
    }

    return <ExpensesContext.Provider value={value}>{ children }</ExpensesContext.Provider>
}