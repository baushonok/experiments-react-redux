import React, { Component } from 'react';

import { IImage } from 'pictures/types';

import './index.css';

interface IProps {
  image: IImage;
}

export default class ImageCard extends Component<IProps> {
  public render() {
    const {
      image: {
        id,
        urls: { small },
        description,
      },
    } = this.props;
    return (
      <li key={id} className="image-card">
        <img src={small} alt={description} className="image-card__image" />
      </li>
    );
  }
}
