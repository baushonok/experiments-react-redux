import React, { Component } from 'react';

import { IImage } from 'pictures/types';
import { IProps } from './types';

import './index.css';

export default class ImagesList extends Component<IProps> {
  public render() {
    return <ul className="images-list">{this.renderImagesList()}</ul>;
  }
  private renderImagesList = () => {
    const { images } = this.props;
    return images.map(({ id, urls: { small }, description }: IImage) => (
      <li key={id} className="images-list__item">
        <img src={small} alt={description} className="images-list__image" />
      </li>
    ));
  };
}
