import * as React from 'react';
import { FormattedMessage } from "react-intl";

export namespace HeaderBar {
  export interface Props {
    messages: any
  }
}

export class HeaderBar extends React.Component<HeaderBar.Props> {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Todo</a>
        <div className="nav navbar-nav ml-auto">
          <button className="btn btn-sm btn-primary">
            <FormattedMessage id="ruLang" defaultMessage="РУС" />
          </button>
          <button className="btn btn-sm btn-outline-secondary">
            <FormattedMessage id="enLang" defaultMessage="ENG" />
          </button>
        </div>
      </nav>
    );
  }
}
