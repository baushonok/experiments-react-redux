import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Comments from 'comments';
import Form from 'form';
import Home from 'home';
import Navigation from 'navigation';
import Transformations from 'transformations';

import './index.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/transformations" component={Transformations} />
        <Route path="/form" component={Form} />
        <Route path="/comments" component={Comments} />
      </Switch>
    </Router>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element does not exist');
}

ReactDOM.render(<App />, container);
