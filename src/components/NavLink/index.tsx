import React, { ReactNode } from 'react';

import { Link, useRoute } from 'wouter';

import './index.css';

interface IProps {
  href: string;
  children: ReactNode;
}

export default function NavLink(props: IProps) {
  const { href, children } = props;
  const [isActive] = useRoute(href);

  return (
    <Link {...props}>
      <a href={href} className={isActive ? 'active' : ''}>
        {children}
      </a>
    </Link>
  );
}
