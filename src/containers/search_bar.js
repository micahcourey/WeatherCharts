import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form className="input-group">
        <input type="text" className="form-control" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}
