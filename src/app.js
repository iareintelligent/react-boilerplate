import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
    <div>This is from my Dashboard component</div>
);

const AddExpensePage = () => <div>This is from my Add Expense component</div>;

const EditExpensePage = () => <div>This is my Edit Expense Component</div>;

const HelpPage = () => <div>This is my Help component</div>;

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} exact={true} />
                <Route path="/edit" component={EditExpensePage} exact={true} />
                <Route path="/help" component={HelpPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
