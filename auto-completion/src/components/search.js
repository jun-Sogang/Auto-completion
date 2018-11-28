import React from 'react';
import axios from 'axios';
import SearchBar from './searchbar';
import Recommend from './recommend';

const URL = '';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      recommendData: [],
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(text) {
    this.setState({
      inputText: text,
    });
    axios.get(`${URL}?query=${text}`)
      .then((res) => {
        const recommendData = JSON.parse(res.data);

        this.setState({
          recommendData: recommendData,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="search">
        <SearchBar
          inputText={this.state.inputText}
          onUserInput={this.handleUserInput}
        />
        <Recommend
          recommendData={this.state.recommendData}
        />
      </div>);
  }
}
