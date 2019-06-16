import axios from 'axios';
import React, { Component } from 'react';

import ImagesList from 'components/ImagesList';
import SearchBar from 'components/SearchBar';

import { IImageList, IState } from './types';

import KEYS from '../keys';

import './index.css';

const ACCESS_KEY = KEYS.unsplash.accessKey;

export default class Pictures extends Component<{}, IState> {
  public readonly state = {
    images: [],
  };
  public render() {
    const { images } = this.state;
    return (
      <div className="ui container">
        <h1 className="ui header">Search for pictures</h1>
        <SearchBar onInputChange={this.handleInputChange.bind(this)} />
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

    this.setState({ images: response.data.results });
  }
}
