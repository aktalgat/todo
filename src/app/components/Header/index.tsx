import * as React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Todo</a>
        <div className="nav navbar-nav ml-auto">
          <button className="btn btn-sm btn-primary">РУС</button>
          <button className="btn btn-sm btn-outline-secondary">ENG</button>
        </div>
      </nav>
    );
  }
}
