import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default (
    <div>
        <Switch>
            <Route exact path = '/' component={Dashboard}/>
            <Route path='/addProperty' component={Wizard}/>>
        </Switch>
    </div>
)