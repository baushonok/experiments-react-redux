import React, { Component } from 'react';

import { IProps } from './types';

import './index.css';

export default class ImagesList extends Component<IProps> {
  public render() {
    return <ul className="images-list">{this.renderImagesList()}</ul>;
  }
  private renderImagesList = () => {
    const { images } = this.props;
    return images.map(current => (
      <li key={current.id} className="images-list__item">
        <img src={current.urls.small} alt={current.description} />
      </li>
    ));
  };
}
