import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import SortByDropdown from "./SortByDropdown";

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <SortByDropdown />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
