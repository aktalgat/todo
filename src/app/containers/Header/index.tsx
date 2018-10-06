import * as React from 'react';
import {HeaderBar} from "app/components";

export namespace Header {
  export interface Props {
    currentLocale?: any;
    locales?: any;
    updateIntl?: any;
  }
}

export class Header extends React.Component<Header.Props> {
  render() {
    const headerProps = this.props as HeaderBar.Props;
    return (
      <HeaderBar {...headerProps}/>
    );
  }
}
