import React, { Component } from 'react';

import ImagesList from 'components/ImagesList';
import SearchBar from 'components/SearchBar';

import './index.css';

export default class Pictures extends Component {
  public render() {
    return (
      <>
        <h1 className="ui header">Search for pictures</h1>
        <SearchBar />
        <ImagesList />
      </>
    );
  }
}
