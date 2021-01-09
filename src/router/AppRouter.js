import React from 'react';
import DashBoardComponent from '../components/DashBoardComponent';
import AddExpenseComponent from '../components/AddExpenseComponent';
import EditExpenseComponent from '../components/EditExpenseComponent';
import HelpComponent from '../components/HelpComponent';
import NotFoundComponent from '../components/NotFoundComponent';
import HeaderComponent from '../components/HeaderComponent';
import { BrowserRouter, Route, Switch} from "react-router-dom";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <HeaderComponent />
            <Switch>
                <Route path="/" component={DashBoardComponent} exact={true} />
                <Route path="/create" component={AddExpenseComponent} />
                <Route path="/edit/:val" component={EditExpenseComponent} />
                <Route path="/help" component={HelpComponent} />
                <Route component={NotFoundComponent} />
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;