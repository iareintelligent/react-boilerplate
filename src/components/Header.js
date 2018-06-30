import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <NavLink exact={true} activeClassName="is-active" to="/">
                Dashboard
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/create">
                Create Expense
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/edit">
                Edit Expense
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/help">
                Help
            </NavLink>
        </nav>
    </header>
);

export default Header;
