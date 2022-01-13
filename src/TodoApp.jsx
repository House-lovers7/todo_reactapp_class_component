import React from 'react';

class TodoApp extends React.Component {

  constructor() {
    super()
    this.state = {
      todoList: [],
      value: "",
    }
  }

  onChange(e) {
    this.setState({ value: e.target.value })
  }

  add() {
    this.setState({
      todoList: this.state.todoList.concat(this.state.value)
    })
  }

  render() {
    console.log(this.state.todoList);
    return (
      <div>
        <h1>TODO App</h1>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.onChange(e)}
          />
        </div>
        {/* <p>{this.state.value}</p> */}
        <button onClick={() => this.add}>追加</button>
      </div>
    );
  }
}

export default TodoApp;
