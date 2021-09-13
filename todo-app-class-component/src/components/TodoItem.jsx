import React, { Component } from 'react';

export default class TodoItem extends Component {
  RemoveItemButtonHandler(id) {
    this.props.RemoveItemHandler(id);
  }

  render() {
    return (
      <div
        className="alert alert-primary d-flex justify-content-between"
        role="alert"
      >
        <span>{this.props.title}</span>
        <span
          onClick={this.RemoveItemButtonHandler.bind(this, this.props.id)}
          style={{ cursor: 'pointer' }}
        >
          <i className="fas fa-trash"></i>
        </span>
      </div>
    );
  }
}
