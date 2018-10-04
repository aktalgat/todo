import * as React from 'react';
import { FormattedMessage } from 'react-intl';

export namespace NotFound {
  export interface Props {
    messages: any
  }
}

export class NotFound extends React.Component<NotFound.Props> {
  render() {
    return (
      <div className="text-center d-flex">
        <div className="not-found-content">
          <h1>404</h1>
          <h3><FormattedMessage id="pageNotFound" defaultMessage="Page not found" /></h3>
        </div>
      </div>
    );
  }
}
