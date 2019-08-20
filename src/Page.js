import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

export default () => (
    <Router>
        <Switch>
            {/* <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />         */}
            <Route path="/" component={App} />
        </Switch>
    </Router>
)