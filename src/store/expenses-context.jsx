import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({ 
    expenses: [],
    addExpense: ({description,amount,date}) => {},
    setExpenses: (expenses) => {},
    updateExpense: (id,{description,amount,date}) => {},
    removeExpense: (id) => {},
});

function expensesReducer(state,action){
    switch(action.type){
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();    
            return [{...action.payload,id: id},...state];
        case 'SET':
            return action.payload;
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
    const [expensesState,dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData){ 
        dispatch({type: 'ADD',payload: expenseData });
    }

    function setExpenses(expenses){ 
        dispatch({type: 'SET',payload: expenses});
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
        setExpenses: setExpenses,
        updateExpense: updateExpense,
        removeExpense: removeExpense
    }

    return <ExpensesContext.Provider value={value}>{ children }</ExpensesContext.Provider>
}