import * as React from 'react';
import { TodoModel } from 'app/models';

export namespace TodoItem {
  export interface Methods {
    onKeyEnterPressed: any;
    onChanged: any;
    onChecked: any;
    onDelete: any;
  }

  export interface Fields {
    item: TodoModel;
  }

  export interface Props extends Methods, Fields {}

  export interface State {
    todo: string;
    checked: boolean;
    active: boolean;
  }
}

export class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {
  constructor(props: TodoItem.Props) {
    super(props);
    this.state = {
      todo: props.item.todo,
      checked: props.item.checked,
      active: false
    };
  }

  componentWillReceiveProps(nextProps: TodoItem.Props) {
    this.setState({
      todo: nextProps.item.todo,
      checked: nextProps.item.checked
    });
  }

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

  handleTodoDelete = () => {
    this.props.onDelete({ id: this.props.item.id });
  };

  handleOnFocus = () => {
    this.setState({ active: true });
  };

  handleOnBlur = () => {
    this.setState({ active: false });
  };

  render() {
    const { checked, todo } = this.props.item;
    return (
      <div
        className={'form-row todo-item-row' + (this.state.active ? ' todo-item-row-active' : '')}
      >
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
            className={'form-control todo-item-input' + (checked ? ' todo-item-input-checked' : '')}
            value={todo}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChange={this.handleTodoChange}
          />
        </div>
        <div className="col-auto">
          <span className="todo-item-delete" onClick={this.handleTodoDelete}>
            <i className="fas fa-times-circle" />
          </span>
        </div>
      </div>
    );
  }
}
