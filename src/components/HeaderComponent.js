import React from 'react';
import {NavLink} from 'react-router-dom';

const HeaderComponent = () => (
    <div>
        <h2>Welcome to Expense Page</h2>
        <span>
            <NavLink activeClassName="is-active" to="/" exact={true}>Home&emsp;</NavLink>
            <NavLink activeClassName="is-active" to="/create">Add Expense&emsp;</NavLink>
            <NavLink activeClassName="is-active" to="/help">Help</NavLink>
        </span>
    </div>
);

export default HeaderComponent;