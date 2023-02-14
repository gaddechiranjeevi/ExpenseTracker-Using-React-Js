import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
    expenses: {}
}

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: initialExpenseState,
    reducers: {
        onAddOrGetExpense(state, action){
            state.expenses = action.payload
        },
        totalExpense(state){
            console.log('total expenses');
        }
    }
});

export const expensAction = expenseSlice.actions;

export default expenseSlice.reducer;