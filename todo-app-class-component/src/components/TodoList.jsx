import React, { Component } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddItem from './AddItem';

export default class TodoList extends Component {
  state = {
    todos: [],
  };

  AddItemEvent(title) {
    axios
      .post(
        'http://localhost:3100/todos',
        { title },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          this.setState({ todos: [...this.state.todos, response.data] });
        }
      });
  }

  RemoveItemEvent(id) {
    console.log(id);
    axios.delete(`http://localhost:3100/todos/${id}`).then((response) => {
      if (response.status === 200) {
        this.setState({
          todos: this.state.todos.filter((item) => item.id !== id),
        });
      }
    });
  }

  componentDidMount() {
    axios.get('http://localhost:3100/todos').then((response) => {
      if (response.status === 200) {
        this.setState({ todos: response.data });
      }
    });
  }

  render() {
    return (
      <div className="jumbotron mt-4">
        <AddItem AddItemHandler={this.AddItemEvent.bind(this)} />
        <h2>TodoList</h2>
        {this.state.todos.map((todo) => (
          <TodoItem
            RemoveItemHandler={this.RemoveItemEvent.bind(this)}
            key={todo.id}
            title={todo.title}
            id={todo.id}
          />
        ))}
      </div>
    );
  }
}
