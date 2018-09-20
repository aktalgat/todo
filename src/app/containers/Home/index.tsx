import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { NewItem, Title, TodoItem } from 'app/components';
import { TodoModels } from 'app/models';
import { connect } from 'react-redux';
import { RootState } from 'app/reducers';
import { bindActionCreators, Dispatch } from 'redux';
import { TodoActions } from 'app/actions';

export namespace Home {
  export interface Props extends RouteComponentProps<void> {
    model: TodoModels;
    add: any;
    editTodo: any;
    check: any;
    editTitle: any
  }
}

@connect(
  (state: RootState): Pick<Home.Props, 'model'> => {
    console.log('model: {}', state.todos);
    return {
      model: state.todos
    };
  },
  (dispatch: Dispatch): Pick<Home.Props, 'add' | 'editTodo' | 'check' | 'editTitle'> => {
    return {
      add: bindActionCreators(TodoActions.add, dispatch),
      editTodo: bindActionCreators(TodoActions.editTodo, dispatch),
      check: bindActionCreators(TodoActions.check, dispatch),
      editTitle: bindActionCreators(TodoActions.editTitle, dispatch)
    };
  }
)
export class Home extends React.Component<Home.Props> {
  getTodos = (checked: boolean) => {
    const { add, editTodo, check } = this.props;
    const { focusItem } = this.props.model;

    return this.props.model.todos.filter((item) => item.checked == checked).map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          isFocused={focusItem != 'new'}
          onKeyEnterPressed={add}
          onChanged={editTodo}
          onChecked={check}
        />
      );
    });
  };

  getCheckedCount = () => {
    return this.props.model.todos.filter(item => item.checked).length;
  };

  getHr = () => {
    if (this.getCheckedCount() > 0) {
      return <hr />;
    }
    return '';
  };

  render() {
    const { focusItem, title } = this.props.model;
    const { editTitle } = this.props;
    return (
      <div className="container">
        <div className="card">
          <Title title={title} onEditTitle={editTitle}/>
          {this.getTodos(false)}
          <NewItem onEnteredItem={this.props.add} isFocused={focusItem == 'new'} />
          {this.getHr()}
          {this.getTodos(true)}
        </div>
      </div>
    );
  }
}
