import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Comments from 'comments';
import Form from 'form';
import Home from 'home';
import Navigation from 'navigation';
import Seasons from 'seasons';
import { IProps as IState } from 'seasons/types';
import Transformations from 'transformations';

import './index.css';

class App extends Component<{}, IState> {
  public readonly state = {
    errorMessage: '',
    lat: null,
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
    const { errorMessage, lat } = this.state;
    return <Seasons errorMessage={errorMessage} lat={lat} />;
  };
  private initUserGeolocation() {
    window.navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        this.setState({ lat: position.coords.latitude, errorMessage: '' });
      },
      (err: PositionError) => {
        this.setState({ lat: null, errorMessage: err.message });
      },
    );
  }
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element does not exist');
}

ReactDOM.render(<App />, container);
