import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import routesConfig from './config';
import AllComponents from '../components';

export default class CRouter extends Component {
  render() {
    return (
      <Switch>
        {
          Object.keys(routesConfig).map(key =>
            routesConfig[key].map(r => {
              const Component = AllComponents[r.component];
              return (
                <Route
                  key={r.route || r.key}
                  exact
                  path={r.route || r.key}
                  render={props => {
                    // console.log(props)
                    return (
                      <DocumentTitle title={r.title}>
                        <Component />
                      </DocumentTitle>
                    )
                  }}
                />
              )
            })
          )
        }
      </Switch>
    )
  }
}
