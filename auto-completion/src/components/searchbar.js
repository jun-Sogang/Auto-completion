import React from 'react';

export default class Searchbar extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.refs.inputText.value)
  }

  render() {
    const inputText = this.props.inputText;

    return (
      <form>
        <input
          type="text"
          placeholder="Search"
          value={inputText}
          ref="inputText"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
