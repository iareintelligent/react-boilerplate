import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const expenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>
            {amount} - {createdAt}
        </p>
        <button
            onClick={e => {
                dispatch(removeExpense({ id }));
                console.log("removing", id);
            }}
        >
            Remove Expense
        </button>
    </div>
);

const mapStateToProps = state => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(expenseListItem);
