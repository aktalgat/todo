import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {TodoItem} from "app/components";
import {TodoModel} from "app/models";
import {connect} from "react-redux";
import {RootState} from "app/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {TodoActions} from "app/actions";

export namespace Home {
  export interface Props extends RouteComponentProps<void> {
    todos: TodoModel[],
    add: any
  }
}

@connect(
  (state: RootState): Pick<Home.Props, 'todos'> => {
    console.log(state.todos);
    return {
      todos: state.todos
    }
  },
  (dispatch: Dispatch): Pick<Home.Props, 'add'> => {
    return {
      add: bindActionCreators(TodoActions.add, dispatch)
    }
  }
)
export class Home extends React.Component<Home.Props> {

  addTodo(item: TodoModel) {
    console.log('item: {}', item);
  }

  getTodos = () => {
    const {add} = this.props;
    console.log('todos: {}', this.props.todos);

    return this.props.todos.map((todo, index) => {
      return <TodoItem key={index} item={todo} onKeyEnterPressed={add}/>
    });
  };

  render() {
    const item: TodoModel = {todo: '', checked: false};
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            {this.getTodos()}
            <TodoItem item={item} onKeyEnterPressed={()=>{}}/>
          </div>
        </div>
      </div>
    );
  }
}
