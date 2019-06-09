import React, { Component } from 'react';

import { IProps, Season } from './types';

import './index.css';

export default class Seasons extends Component<IProps> {
  public render() {
    const { errorMessage, season = null } = this.props;

    return (
      <>
        <h2>Seasons</h2>
        <div>{errorMessage ? this.renderErrorMessage(errorMessage) : this.renderSeasonMessage(season)}</div>
      </>
    );
  }
  private renderErrorMessage = (message: string) => <span className="error-message">Error: {message}</span>;
  private renderSeasonMessage = (season: Season | null) =>
    `Season: ${season === Season.WINTER ? 'Burr, it is chilly' : 'Lets hit the beach!'}`;
}
