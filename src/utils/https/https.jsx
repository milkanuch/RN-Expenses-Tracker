import axios from "axios";
import { BACKEND_URL } from "../../constants/Backend";

export default async function storeExpense(expenseData){
    const response = await axios.post(
        BACKEND_URL + '/expenses.json',
        expenseData
    );

    return response.data.name;
}
export async function fetchExpenses(){
    const response = await axios.get(
        BACKEND_URL + 'expenses.json'
    );
    const expenses = [];

    for(const key in response.data){
        const expenseObj = { 
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        };
        expenses.push(expenseObj);
    }
    return expenses;
}

export function upgradeExpense(id,expenseData){
    return axios.put(BACKEND_URL + `/expenses/${id}.json`,expenseData);
}

export function delExpense(id) {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}