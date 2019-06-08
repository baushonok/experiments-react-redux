import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Comments from 'comments';
import Form from 'form';
import Home from 'home';
import Navigation from 'navigation';
import Seasons from 'seasons';
import Transformations from 'transformations';

import { IState } from './types';

import './index.css';

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {};
    this.initUserGeolocation();
  }
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
  private getSeasonsComponent = () => {
    const { userLocation } = this.state;
    return <Seasons location={userLocation} />;
  };
  private initUserGeolocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        this.setState({ userLocation: position });
      },
      (err: PositionError) => {
        this.setState({ userLocation: undefined });
      },
    );
  }
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element does not exist');
}

ReactDOM.render(<App />, container);
