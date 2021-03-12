import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Add from './pages/Add';
import Edit from './pages/Edit';
import NotFound from './pages/NotFound';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/adicionar">
                <Add />
            </Route>
            <Route exact path="/naver/editar/:id">
                <Edit />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}