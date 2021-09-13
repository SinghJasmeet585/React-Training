import React, { Component } from 'react';

export default class AddItem extends Component {
  state = { title: '' };

  AddItemButtonHandler(title) {
    this.props.AddItemHandler(title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <input
            type="text"
            onChange={(e) => this.setState({ title: e.target.value })}
            placeholder="Title"
            className="form-control"
            value={this.state.title}
          />
        </div>
        <div className="form-group">
          <button
            onClick={this.AddItemButtonHandler.bind(this, this.state.title)}
            className="btn btn-secondary"
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
