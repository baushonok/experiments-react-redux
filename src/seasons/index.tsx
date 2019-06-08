import React, { Component } from 'react';

import { IProps } from './types';

export default class Seasons extends Component<IProps> {
  public render() {
    return (
      <>
        <h2>Seasons</h2>
        {this.renderLocation()}
      </>
    );
  }
  private renderLocation = () => {
    const { location } = this.props;
    if (!location || !location.coords) {
      return null;
    }
    return <div>Latitude: {location.coords.latitude}</div>;
  };
}
