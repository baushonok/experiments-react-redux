import React, { Component } from 'react';

import ImagesList from 'components/ImagesList';
import SearchBar from 'components/SearchBar';

import { IState } from './types';

import './index.css';

export default class Pictures extends Component<{}, IState> {
  public readonly state = {
    searchString: '',
  };
  public render() {
    const { searchString } = this.state;
    return (
      <div className="ui container">
        <h1 className="ui header">Search for pictures</h1>
        <SearchBar onInputChange={this.handleInputChange} />
        <ImagesList searchString={searchString} />
      </div>
    );
  }
  private handleInputChange = (searchString: string) => {
    this.setState({ searchString });
  };
}
