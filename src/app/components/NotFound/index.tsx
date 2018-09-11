import * as React from 'react';

export class NotFound extends React.Component {
  render() {
    return (
      <div className="text-center d-flex">
        <div className="not-found-content">
          <h1>404</h1>
          <h3>Page not found</h3>
        </div>
      </div>
    );
  }
}
