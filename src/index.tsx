import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from 'navigation';
import Transformations from 'transformations';

import './index.css';

class App extends Component {
  public render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/transformations" component={Transformations} />
        </Switch>
      </Router>
    );
  }
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element does not exist');
}

ReactDOM.render(<App />, container);
