import React, { Component } from 'react';

import { IProps } from './types';

import './index.css';

export default class ImagesList extends Component<IProps> {
  public render() {
    const { images } = this.props;
    return (
      <ul className="images-list">
        {images.map(current => (
          <li key={current.id} className="images-list__item">
            <img src={current.urls.small} alt={current.description} />
          </li>
        ))}
      </ul>
    );
  }
}
