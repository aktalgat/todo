import * as React from 'react';
import {TodoModel} from "app/models";

export namespace TodoItem {
  export interface Methods {
    onKeyEnterPressed: any
  }

  export interface Fields {
    item: TodoModel
  }

  export interface Props extends Methods, Fields {}

  export interface State {
    todo: string;
  }
}

export class TodoItem extends React.Component<TodoItem.Props, TodoItem.State> {

  constructor(props: TodoItem.Props) {
    super(props);
    this.state = {
      todo: props.item.todo
    }
  }

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.charCode == 13) {
      this.props.onKeyEnterPressed({todo: this.state.todo});
      event.preventDefault();
    }
  };

  handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({todo: e.target.value});
  };

  render() {
    const {todo, checked} = this.props.item;
    return (
      <div className="form-row todo-item-row">
        <div className="form-check-inline todo-item-check">
          <input type="checkbox" className="form-check-input" defaultChecked={checked}/>
        </div>
        <div className="col">
          <input type="text" className="form-control todo-item-input" defaultValue={todo}
                 onChange={this.handleTodoChange}
                 onKeyPress={this.handleKeyPress} autoFocus/>
        </div>
      </div>
    );
  }
}
