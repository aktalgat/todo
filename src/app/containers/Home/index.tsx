import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {HeaderBar, NewItem, Title, TodoItem} from 'app/components';
import { TodoModels } from 'app/models';
import { connect } from 'react-redux';
import { RootState } from 'app/reducers';
import { bindActionCreators, Dispatch } from 'redux';
import { TodoActions } from 'app/actions';

export namespace Home {
  export interface Props extends RouteComponentProps<void> {
    model: TodoModels;
    messages: any;
    add: any;
    editTodo: any;
    check: any;
    editTitle: any;
    removeTodo: any;
  }
}

@connect(
  (state: RootState): Pick<Home.Props, 'model' | 'messages'> => {
    return {
      model: state.todos,
      messages: state.intl.messages
    };
  },
  (
    dispatch: Dispatch
  ): Pick<Home.Props, 'add' | 'editTodo' | 'check' | 'editTitle' | 'removeTodo'> => {
    return {
      add: bindActionCreators(TodoActions.add, dispatch),
      editTodo: bindActionCreators(TodoActions.editTodo, dispatch),
      check: bindActionCreators(TodoActions.check, dispatch),
      editTitle: bindActionCreators(TodoActions.editTitle, dispatch),
      removeTodo: bindActionCreators(TodoActions.removeTodo, dispatch)
    };
  }
)
export class Home extends React.Component<Home.Props> {
  getTodos = (checked: boolean) => {
    const { add, editTodo, check, removeTodo } = this.props;
    return this.props.model.todos.filter((item) => item.checked == checked).map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          onKeyEnterPressed={add}
          onChanged={editTodo}
          onChecked={check}
          onDelete={removeTodo}
        />
      );
    });
  };

  getCheckedCount = () => {
    return this.props.model.todos.filter((item) => item.checked).length;
  };

  getHr = () => {
    if (this.getCheckedCount() > 0) {
      return <hr />;
    }
    return '';
  };

  render() {
    const { title } = this.props.model;
    const { editTitle, messages } = this.props;
    return (
      <div>
        <HeaderBar messages={messages} />
        <div className="container home-container">
          <div className="card">
            <Title title={title} onEditTitle={editTitle} messages={messages} />
            {this.getTodos(false)}
            <NewItem onEnteredItem={this.props.add} messages={messages} />
            {this.getHr()}
            {this.getTodos(true)}
          </div>
        </div>
      </div>
    );
  }
}
