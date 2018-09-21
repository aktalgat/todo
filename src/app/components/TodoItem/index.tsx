import * as React from 'react';
import { TodoModel } from 'app/models';
import { createRef } from 'react';

export namespace TodoItem {
  export interface Methods {
    onKeyEnterPressed: any;
    onChanged: any;
    onChecked: any;
    onLostFocus: any
  }

  export interface Fields {
    item: TodoModel;
    isFocused: boolean;
    focusItem: number;
  }

  export interface Props extends Methods, Fields {}

  export interface State {
    todo: string;
    checked: boolean;
    active: boolean;
    isFocused: boolean;
  }
}

export class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {
  private ref = createRef<HTMLInputElement>();

  constructor(props: TodoItem.Props) {
    super(props);
    this.state = {
      todo: props.item.todo,
      checked: props.item.checked,
      active: false,
      isFocused: props.isFocused

    };
    this.setFocus();
  }

  componentWillReceiveProps(nextProps: TodoItem.Props) {
    this.setState({
      todo: nextProps.item.todo,
      checked: nextProps.item.checked,
      isFocused: nextProps.focusItem == nextProps.item.id
    });
  }

  componentDidUpdate() {
    this.setFocus();
  }

  setFocus = () => {
    const node = this.ref.current;
    if (node != null && this.state.isFocused) {
      node.focus();
    }
  };

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.charCode == 13) {
      this.props.onKeyEnterPressed({ ...this.props.item, todo: '' });
      event.preventDefault();
    }
  };

  handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changedItem = { ...this.props.item, todo: e.target.value };
    this.setState({ todo: changedItem.todo });
    this.props.onChanged(changedItem);
  };

  handleTodoChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changedItem = { ...this.props.item, checked: e.target.checked };
    this.setState({ todo: changedItem.todo });
    this.props.onChecked(changedItem);
  };

  handleOnFocus = () => {
    this.setState({ active: true });
  };

  handleOnBlur = () => {
    this.setState({ active: false, isFocused: false });
    this.props.onLostFocus({focusItem: -2});
  };

  render() {
    const { checked, todo } = this.props.item;
    const { isFocused } = this.state;
    return (
      <div className={'form-row todo-item-row' + (this.state.active ? ' todo-item-row-active' : '')}>
        <div className="form-check-inline todo-item-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={checked}
            onChange={this.handleTodoChecked}
          />
        </div>
        <div className="col">
          <input
            type="text"
            ref={this.ref}
            className={'form-control todo-item-input' + (checked ? ' todo-item-input-checked' : '')}
            value={todo}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChange={this.handleTodoChange}
            onKeyPress={this.handleKeyPress}
            autoFocus={isFocused}
          />
        </div>
      </div>
    );
  }
}
