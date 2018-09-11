import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { Home } from 'app/containers';
import { NotFound } from 'app/components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {}
}

export class App extends React.Component<App.Props> {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
