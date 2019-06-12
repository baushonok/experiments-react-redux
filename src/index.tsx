import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Seasons from 'components/Seasons';
import { IProps as IState, Season } from 'components/Seasons/types';

import Comments from 'comments';
import Form from 'form';
import Home from 'home';
import Navigation from 'navigation';
import Transformations from 'transformations';

import './index.css';

class App extends Component<{}, IState> {
  public readonly state = {
    errorMessage: '',
    season: null,
  };
  public render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/transformations" component={Transformations} />
          <Route path="/form" component={Form} />
          <Route path="/comments" component={Comments} />
          <Route path="/seasons" component={this.getSeasonsComponent} />
        </Switch>
      </Router>
    );
  }
  public componentDidMount = () => {
    this.initUserGeolocation();
  };
  private getSeasonsComponent = () => {
    const { errorMessage, season } = this.state;
    return <Seasons errorMessage={errorMessage} season={season} />;
  };
  private initUserGeolocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        this.setState({ season: this.getSeason(position.coords.latitude, new Date().getMonth()), errorMessage: '' });
      },
      (err: PositionError) => {
        this.setState({ season: null, errorMessage: err.message });
      },
    );
  }
  private getSeason = (lat: number, month: number) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? Season.SUMMER : Season.WINTER;
    }
    return lat > 0 ? Season.WINTER : Season.SUMMER;
  };
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element does not exist');
}

ReactDOM.render(<App />, container);
