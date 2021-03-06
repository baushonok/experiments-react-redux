import React, { Component } from 'react';

import unsplash from 'api/unsplash';
import ImagesList from 'components/ImagesList';
import SearchBar from 'components/SearchBar';

import { IState } from './types';

import './index.css';

export default class Pictures extends Component<{}, IState> {
  public readonly state = {
    images: [],
    searchString: '',
  };
  public render() {
    const { images } = this.state;
    return (
      <div className="ui container">
        <h1 className="ui header">Search for pictures</h1>
        <SearchBar onInputChange={this.handleInputChange} />
        {this.renderFoundMessage()}
        <ImagesList images={images} />
      </div>
    );
  }
  private handleInputChange = async (searchString: string) => {
    if (this.state.searchString === searchString) {
      return;
    }

    const response = await unsplash.get('/search/photos', {
      params: { query: searchString },
    });

    this.setState({ images: response.data.results, searchString });
  };
  private renderFoundMessage = () => {
    const { images, searchString } = this.state;
    return searchString.length ? <span className="ui header">Found {images.length} images</span> : null;
  };
}
