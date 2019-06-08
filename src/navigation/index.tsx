import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transformations">Transformations</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/comments">Comments</Link>
        </li>
        <li>
          <Link to="/seasons">Seasons</Link>
        </li>
      </ul>
    </nav>
  );
}
