import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {TodoItem} from "app/components";
import {TodoModel} from "app/models";
import {connect} from "react-redux";
import {RootState} from "app/reducers";

export namespace Home {
  export interface Props extends RouteComponentProps<void> {
    todos: TodoModel[]
  }
}

@connect(
  (state: RootState): Pick<Home.Props, 'todos'> => {
    return {
      todos: state.todos
    }
  }
)
export class Home extends React.Component<Home.Props> {

  addTodo(item: TodoModel) {
    console.log('item: {}', item);
  }

  getTodos = () => {
    return this.props.todos.map((todo, index) => {
      return <TodoItem key={index} item={todo} onKeyEnterPressed={this.addTodo}/>
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            {this.getTodos()}
          </div>
        </div>
      </div>
    );
  }
}
