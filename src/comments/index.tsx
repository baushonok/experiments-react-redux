import React from 'react';

import faker from 'faker';

export default function Comments() {
  return (
    <>
      <h1>Comments</h1>
      <ul className="ui container comments">
        <li className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
          </a>
          <section className="content">
            <a href="/" className="author">
              {faker.name.firstName()}
            </a>
            <span className="metadata">
              <time className="date">{faker.date.past().toLocaleDateString()}</time>
            </span>
            <p className="text">{faker.lorem.sentence()}</p>
          </section>
        </li>
        <li className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
          </a>
          <section className="content">
            <a href="/" className="author">
              {faker.name.firstName()}
            </a>
            <span className="metadata">
              <time className="date">{faker.date.past().toLocaleDateString()}</time>
            </span>
            <p className="text">{faker.lorem.sentence()}</p>
          </section>
        </li>
        <li className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
          </a>
          <section className="content">
            <a href="/" className="author">
              {faker.name.firstName()}
            </a>
            <span className="metadata">
              <time className="date">{faker.date.past().toLocaleDateString()}</time>
            </span>
            <p className="text">{faker.lorem.sentence()}</p>
          </section>
        </li>
      </ul>
    </>
  );
}
