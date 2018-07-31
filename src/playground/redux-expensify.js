import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
const removeExpense = ({ id }) => ({
    type: "REMOVE_EXPENSE",
    id
});
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});
const setStartDate = startDate => ({
    type: "SET_START_DATE",
    startDate
});
const setEndDate = endDate => ({
    type: "SET_END_DATE",
    endDate
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map(
                expense =>
                    expense.id === action.id
                        ? { ...expense, ...action.updates }
                        : expense
            );
        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses
        .filter(expense => {
            const startDateMatch =
                typeof startDate !== "number" || expense.createdAt >= startDate;
            const endDateMatch =
                typeof endDate !== "number" || expense.createdAt <= endDate;
            // const textMatch = expense.toLowerCase().includes(text) ? text : false;
            const textMatch = expense.description.toLowerCase().includes(text);

            return startDateMatch && endDateMatch && textMatch;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "amount":
                    console.log("sorting by amount");
                    return b.amount - a.amount;
                case "date":
                    return a.createdAt - b.createdAt;
            }
        });
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

const demoState = {
    expenses: [
        {
            id: "paoiwaenf;laskd",
            description: "January Rent",
            note: "This was the final payment for that address",
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: "rent",
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(124));
const expense1 = store.dispatch(
    addExpense({ description: "Rent", amount: 70000, createdAt: 127 })
);
const expense2 = store.dispatch(
    addExpense({ description: "coffee", amount: 300, createdAt: 0 })
);

store.dispatch(sortByAmount());
store.dispatch(editExpense(expense1.expense.id, { amount: 200 }));
store.dispatch(editExpense(expense1.expense.id, { amount: 80000 }));
