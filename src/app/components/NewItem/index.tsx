import * as React from 'react';
import { createRef } from 'react';

export namespace NewItem {
  export interface Methods {
    onEnteredItem: any;
  }
  export interface Fields {
    isFocused: boolean;
  }

  export interface Props extends Methods, Fields {}

  export interface State {
    todo: string;
    active: boolean;
    isFocused: boolean;
  }
}

export class NewItem extends React.Component<NewItem.Props, NewItem.State> {
  private ref = createRef<HTMLInputElement>();
  constructor(props: NewItem.Props) {
    super(props);
    this.state = {
      todo: '',
      active: false,
      isFocused: props.isFocused
    };
  }

  componentDidUpdate() {
    const node = this.ref.current;
    if (node != null && this.state.isFocused) {
      node.focus();
    }
  }

  componentWillReceiveProps(nextProps: NewItem.Props) {
    this.setState({ isFocused: nextProps.isFocused });
  }

  addNewItem = (item: string) => {
    this.props.onEnteredItem({ todo: item, checked: false });
    this.setState({ todo: '' });
  };

  handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ todo: e.target.value });
    if (e.target.value.length > 0) {
      this.addNewItem(e.target.value);
    }
  };

  handleOnFocus = () => {
    this.setState({ active: true });
  };

  handleOnBlur = () => {
    this.setState({ active: false });
  };

  render() {
    return (
      <div className={'form-row new-item-row' + (this.state.active ? ' new-item-row-active' : '')}>
        <div className="form-check-inline new-item-check">
          <span className="new-item-plus">+</span>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control new-item-input"
            ref={this.ref}
            value={this.state.todo}
            placeholder="New item"
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChange={this.handleTodoChange}
            autoFocus
          />
        </div>
      </div>
    );
  }
}
