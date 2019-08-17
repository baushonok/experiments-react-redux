import React from 'react';

import NavLink from 'components/NavLink';

import './index.css';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/transformations">Transformations</NavLink>
        </li>
        <li>
          <NavLink href="/form">Form</NavLink>
        </li>
        <li>
          <NavLink href="/comments">Comments</NavLink>
        </li>
        <li>
          <NavLink href="/seasons">Seasons</NavLink>
        </li>
        <li>
          <NavLink href="/pictures">Pictures</NavLink>
        </li>
        <li>
          <NavLink href="/file-tree">File tree</NavLink>
        </li>
      </ul>
    </nav>
  );
}
