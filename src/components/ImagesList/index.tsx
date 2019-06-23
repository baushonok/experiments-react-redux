import React, { Component } from 'react';

import { IImage } from 'pictures/types';
import ImageCard from './ImageCard';
import { IProps } from './types';

import './index.css';

export default class ImagesList extends Component<IProps> {
  public render() {
    return <ul className="images-list">{this.renderImagesList()}</ul>;
  }
  private renderImagesList = () => {
    const { images } = this.props;
    return images.map((image: IImage) => <ImageCard image={image} key={image.id} />);
  };
}
