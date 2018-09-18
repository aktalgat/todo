import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {NewItem, TodoItem} from "app/components";
import {TodoModel} from "app/models";
import {connect} from "react-redux";
import {RootState} from "app/reducers";
import {bindActionCreators, Dispatch} from "redux";
import {TodoActions} from "app/actions";

export namespace Home {
  export interface Props extends RouteComponentProps<void> {
    todos: TodoModel[],
    add: any,
    edit: any
  }
}

@connect(
  (state: RootState): Pick<Home.Props, 'todos'> => {
    return {
      todos: state.todos
    }
  },
  (dispatch: Dispatch): Pick<Home.Props, 'add' | 'edit'> => {
    return {
      add: bindActionCreators(TodoActions.add, dispatch),
      edit: bindActionCreators(TodoActions.edit, dispatch)
    }
  }
)
export class Home extends React.Component<Home.Props> {
  getTodos = () => {
    const {add, edit} = this.props;
    console.log('todos: {}', this.props.todos);

    return this.props.todos.map((todo, index) => {
      return <TodoItem key={index} item={todo} onKeyEnterPressed={add} onChanged={edit}/>
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          {this.getTodos()}
          <NewItem onEnteredItem={this.props.add}/>
        </div>
      </div>
    );
  }
}
