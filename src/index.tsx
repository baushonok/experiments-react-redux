import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class App extends Component {
  public render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element does not exist');
}

ReactDOM.render(<App />, container);
