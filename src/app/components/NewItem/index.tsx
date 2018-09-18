import * as React from 'react';

export namespace NewItem {
  export interface Props {
    onEnteredItem: any
  }

  export interface State {
    todo: string;
    active: boolean;
  }
}

export class NewItem extends React.Component<NewItem.Props, NewItem.State> {
  constructor(props: NewItem.Props) {
    super(props);
    this.state = {
      todo: '',
      active: false
    }
  }

  addNewItem = (item: string) => {
    console.log('new item: {}', item);
    this.props.onEnteredItem({todo: item});
    this.setState({todo: ''});
  };

  handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.charCode == 13) {
      event.preventDefault();
      this.addNewItem(this.state.todo);
    }
  };

  handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({todo: e.target.value});
    if (e.target.value.length > 0) {
      this.addNewItem(e.target.value);
    }
  };

  handleOnFocus = () => {
    this.setState({active: true});
  };

  handleOnBlur = () => {
    this.setState({active: false});
  };


  render() {
    return (
      <div className={"form-row new-item-row" + (this.state.active ? " new-item-row-active" : "")}>
        <div className="form-check-inline new-item-check">
          <span className="new-item-plus">+</span>
        </div>
        <div className="col">
          <input type="text" className="form-control new-item-input"
                 value={this.state.todo}
                 placeholder="List item"
                 onFocus={this.handleOnFocus}
                 onBlur={this.handleOnBlur}
                 onChange={this.handleTodoChange}
                 onKeyPress={this.handleKeyPress} autoFocus/>
        </div>
      </div>
    )
  }
}
