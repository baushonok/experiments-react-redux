import React, { Component } from 'react';

import { SEASON_CONFIG } from './constants';
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
  private renderSeasonMessage = (season: Season | null) => {
    if (season === null) {
      return null;
    }
    const { iconName, message } = SEASON_CONFIG[season];
    return (
      <section>
        <i className={`${iconName} icon`} />
        <h1>{message}</h1>
        <i className={`${iconName} icon`} />
      </section>
    );
  };
}
