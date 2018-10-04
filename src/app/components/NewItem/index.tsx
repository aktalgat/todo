import * as React from 'react';

export namespace NewItem {
  export interface Props {
    onEnteredItem: any;
    messages: any;
  }

  export interface State {
    todo: string;
    active: boolean;
  }
}

export class NewItem extends React.Component<NewItem.Props, NewItem.State> {
  constructor(props: NewItem.Props) {
    super(props);
    this.state = {
      todo: '',
      active: false
    };
  }

  addNewItem = () => {
    if (this.state.todo.length > 0) {
      this.props.onEnteredItem({ todo: this.state.todo, checked: false });
      this.setState({ todo: '' });
    }
  };

  handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ todo: e.target.value });
  };

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.charCode == 13) {
      this.addNewItem();
      event.preventDefault();
    }
  };

  handleOnFocus = () => {
    this.setState({ active: true });
  };

  handleOnBlur = () => {
    this.setState({ active: false });
  };

  render() {
    const { messages } = this.props;
    return (
      <div className={'form-row new-item-row' + (this.state.active ? ' new-item-row-active' : '')}>
        <div className="form-check-inline new-item-check">
          <span className="new-item-plus">+</span>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control new-item-input"
            value={this.state.todo}
            placeholder={messages["newItem"]}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChange={this.handleTodoChange}
            onKeyPress={this.handleKeyPress}
            autoFocus
          />
        </div>
      </div>
    );
  }
}
