import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transformations">Transformations</Link>
        </li>
      </ul>
    </nav>
  );
}
