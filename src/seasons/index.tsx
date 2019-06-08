import React, { Component } from 'react';

import { IProps } from './types';

import './index.css';

export default class Seasons extends Component<IProps> {
  public render() {
    const { errorMessage, lat } = this.props;

    return (
      <>
        <h2>Seasons</h2>
        <div>{errorMessage ? this.renderErrorMessage(errorMessage) : this.renderLatitudeMessage(lat)}</div>
      </>
    );
  }
  private renderErrorMessage = (message: string) => <span className="error-message">Error: {message}</span>;
  private renderLatitudeMessage = (lat?: number) => `Latitude: ${lat}`;
}
