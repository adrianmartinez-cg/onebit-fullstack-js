import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import PlanetsScreen from './screens/planets.js';

const Routes = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={PlanetsScreen} />
        </Switch>
    </BrowserRouter>
}

export default Routes;
