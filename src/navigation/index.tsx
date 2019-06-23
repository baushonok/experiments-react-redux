import React from 'react';
import { Link } from 'wouter';

import './index.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <a href="/">Home</a>
          </Link>
        </li>
        <li>
          <Link to="/transformations">
            <a href="/">Transformations</a>
          </Link>
        </li>
        <li>
          <Link to="/form">
            <a href="/">Form</a>
          </Link>
        </li>
        <li>
          <Link to="/comments">
            <a href="/">Comments</a>
          </Link>
        </li>
        <li>
          <Link to="/seasons">
            <a href="/">Seasons</a>
          </Link>
        </li>
        <li>
          <Link to="/pictures">
            <a href="/">Pictures</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
