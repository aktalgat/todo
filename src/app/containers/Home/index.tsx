import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export namespace Home {
  export interface Props extends RouteComponentProps<void> {}
}

export class Home extends React.Component<Home.Props> {
  render() {
    return (
      <div>
        <div>Hello Home page</div>
      </div>
    );
  }
}
