import * as React from 'react';

export namespace Title {
  export interface Methods {
    onEditTitle: any
  }

  export interface Fields {
    title: string;
  }

  export interface Props extends Methods, Fields { }

  export interface State {
    title: string;
  }
}

export class Title extends React.Component<Title.Props, Title.State> {
  constructor(props: Title.Props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value });
    this.props.onEditTitle({title: e.target.value});
  };

  render() {
    const { title } = this.props;
    return (
      <div className="form-row title-row">
        <input
          type="text"
          className="form-control title-input"
          placeholder="Title"
          onChange={this.handleChange}
          value={title}
        />
      </div>
    );
  }
}
