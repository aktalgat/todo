import * as React from 'react';
import {Link} from "react-router-dom";

export namespace HeaderBar {
  export interface Methods {
    updateIntl: any
  }

  export interface Fields {
    currentLocale: any;
    locales: any;
  }

  export interface Props extends Methods, Fields {}
}

export class HeaderBar extends React.Component<HeaderBar.Props> {
  handleLangClick = (locale: any) => {
    this.props.updateIntl({
      locale: locale,
      messages: this.props.locales[locale]
    })
  };

  render() {
    const { currentLocale, locales } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Todo</Link>
        <div className="nav navbar-nav ml-auto">
          {Object.keys(locales).map(locale =>
            <button key={locale}
                    className={"btn btn-sm " + (currentLocale == locale ? 'btn-primary' : 'btn-outline-secondary')}
                    onClick={() => this.handleLangClick(locale)}>
              {locales[locale].lang}
            </button>
          )}
        </div>
      </nav>
    );
  }
}
