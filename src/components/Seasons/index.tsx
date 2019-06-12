import React, { Component } from 'react';

import { SEASON_CONFIG } from './constants';
import { IProps, Season, SeasonIcon, SeasonIconPosition } from './types';

import './index.css';

export default class Seasons extends Component<IProps> {
  public render() {
    const { season = null } = this.props;

    return <section className={`season season-${season}`}>{this.renderSeason()}</section>;
  }
  private renderSeason = () => {
    const { errorMessage, season = null } = this.props;

    if (errorMessage && !season) {
      return this.renderErrorMessage(errorMessage);
    }

    if (!errorMessage && season) {
      return this.renderSeasonMessage(season);
    }

    return this.renderLoading();
  };
  private renderErrorMessage = (message: string) => <span className="error-message">Error: {message}</span>;
  private renderSeasonMessage = (season: Season | null) => {
    if (season === null) {
      return null;
    }
    const { iconName, message } = SEASON_CONFIG[season];
    return (
      <>
        {this.renderSeasonIcon(iconName, SeasonIconPosition.LEFT)}
        <h1>{message}</h1>
        {this.renderSeasonIcon(iconName, SeasonIconPosition.RIGHT)}
      </>
    );
  };
  private renderSeasonIcon = (iconName: SeasonIcon, position: SeasonIconPosition) => (
    <i className={`${iconName} icon massive icon-${position}`} />
  );
  private renderLoading = () => (
    <div className="ui segment">
      <div className="ui active dimmer">
        <span className="ui text loader">Loading</span>
      </div>
    </div>
  );
}
