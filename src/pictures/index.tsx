import axios from 'axios';
import React, { Component } from 'react';

import ImagesList from 'components/ImagesList';
import SearchBar from 'components/SearchBar';

import { IState } from './types';

import KEYS from '../keys';

import './index.css';

const ACCESS_KEY = KEYS.unsplash.accessKey;

export default class Pictures extends Component<{}, IState> {
  public readonly state = {
    images: [],
    searchString: '',
  };
  public render() {
    const { images, searchString } = this.state;
    return (
      <div className="ui container">
        <h1 className="ui header">Search for pictures</h1>
        <SearchBar onInputChange={this.handleInputChange.bind(this)} />
        {searchString.length ? <span className="ui header">Found {images.length} images</span> : null}
        <ImagesList images={images} />
      </div>
    );
  }
  private async handleInputChange(searchString: string) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params: { query: searchString },
    });

    this.setState({ images: response.data.results, searchString });
  }
}
