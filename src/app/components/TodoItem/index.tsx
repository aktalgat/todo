import * as React from 'react';
import {TodoModel} from "app/models";

export namespace TodoItem {
  export interface Methods {
    onKeyEnterPressed: any,
    onChanged: any,
    onChecked: any
  }

  export interface Fields {
    item: TodoModel
  }

  export interface Props extends Methods, Fields {}

  export interface State {
    item: TodoModel,
    active: boolean
  }
}

export class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {

  constructor(props: TodoItem.Props) {
    super(props);
    this.state = {
      item: props.item,
      active: false
    }
  }

  componentWillReceiveProps(nextProps: TodoItem.Props) {
    if (nextProps.item.todo !== this.state.item.todo) {
      this.setState({item: nextProps.item});
    }
  }

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.charCode == 13) {
      this.props.onKeyEnterPressed({todo: ''});
      event.preventDefault();
    }
  };

  handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changedItem = {...this.state.item, todo: e.target.value};
    this.setState({item: changedItem});
    this.props.onChanged(changedItem);
  };

  handleTodoChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changedItem = {...this.state.item, checked: e.target.checked};
    this.setState({item: changedItem});
    this.props.onChecked(changedItem);
  };

  handleOnFocus = () => {
    this.setState({active: true});
  };

  handleOnBlur = () => {
    this.setState({active: false});
  };

  render() {
    const {checked, todo} = this.props.item;
    return (
      <div className={"form-row todo-item-row" + (this.state.active ? " todo-item-row-active" : "")}>
        <div className="form-check-inline todo-item-check">
          <input type="checkbox" className="form-check-input"
                 checked={checked}
                 onChange={this.handleTodoChecked}/>
        </div>
        <div className="col">
          <input type="text"
                 className={"form-control todo-item-input" + (checked ? " todo-item-input-checked" : "")}
                 value={todo}
                 onFocus={this.handleOnFocus}
                 onBlur={this.handleOnBlur}
                 onChange={this.handleTodoChange}
                 onKeyPress={this.handleKeyPress} autoFocus={!checked}/>
        </div>
      </div>
    );
  }
}
