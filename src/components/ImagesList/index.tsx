import React, { Component } from 'react';

import { IProps } from './types';

import './index.css';

export default class ImagesList extends Component<IProps> {
  public render() {
    return (
      <ul className="images-list">
        <li>{this.props.searchString}</li>
      </ul>
    );
  }
}
