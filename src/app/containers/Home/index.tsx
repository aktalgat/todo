import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export namespace Home {
  export interface Props extends RouteComponentProps<void> {}
}

export class Home extends React.Component<Home.Props> {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
              <div className="form-row">
                <div className="form-check-inline">
                  <input type="checkbox" className="form-check-input"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control"/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
