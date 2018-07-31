import React from "react";
import { connect } from "react-redux";
import { sortByDate, sortByAmount } from "../actions/filters";

const SortByDropdown = props => (
    <select
        value={props.filters.sortBy}
        onChange={e => {
            e.target.value === "date"
                ? props.dispatch(sortByDate())
                : props.dispatch(sortByAmount());
        }}
    >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
    </select>
);

const mapStateToProps = state => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(SortByDropdown);
