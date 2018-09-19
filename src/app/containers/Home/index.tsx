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
    edit: any;
    check: any;
  }
}

@connect(
  (state: RootState): Pick<Home.Props, 'model'> => {
    return {
      model: state.todos
    };
  },
  (dispatch: Dispatch): Pick<Home.Props, 'add' | 'edit' | 'check'> => {
    return {
      add: bindActionCreators(TodoActions.add, dispatch),
      edit: bindActionCreators(TodoActions.edit, dispatch),
      check: bindActionCreators(TodoActions.check, dispatch)
    };
  }
)
export class Home extends React.Component<Home.Props> {
  getTodos = (checked: boolean) => {
    const { add, edit, check } = this.props;
    const { focusItem } = this.props.model;

    return this.props.model.todos.filter((item) => item.checked == checked).map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          isFocused={focusItem != 'new'}
          onKeyEnterPressed={add}
          onChanged={edit}
          onChecked={check}
        />
      );
    });
  };

  render() {
    const { focusItem, title } = this.props.model;
    return (
      <div className="container">
        <div className="card">
          <Title title={title} />
          {this.getTodos(false)}
          <NewItem onEnteredItem={this.props.add} isFocused={focusItem == 'new'} />
          <hr />
          {this.getTodos(true)}
        </div>
      </div>
    );
  }
}
