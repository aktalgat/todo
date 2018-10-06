import * as React from 'react';
import { HeaderBar } from "app/components";
import { connect } from "react-redux";
import { RootState } from "app/reducers";
import { updateIntl } from 'react-intl-redux';
import {bindActionCreators, Dispatch} from "redux";

export namespace Header {
  export interface Props {
    currentLocale?: any;
    locales?: any;
    updateIntl?: any;
  }
}

@connect(
  (state: RootState): Pick<Header.Props, 'currentLocale' | 'locales'> => {
    return {
      currentLocale: state.intl.locale,
      locales: state.locales
    }
  },
  (dispatch: Dispatch): Pick<Header.Props, 'updateIntl'> => ({
    updateIntl: bindActionCreators(updateIntl, dispatch)
  })
)
export class Header extends React.Component<Header.Props> {
  render() {
    const headerProps = this.props as HeaderBar.Props;
    return (
      <header>
        <HeaderBar {...headerProps}/>
      </header>
    );
  }
}
