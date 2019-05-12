import React, { Component } from 'react';

interface IProps {
  avatarSrc: string;
  content: string;
  date: Date;
  name: string;
}

export default class Comment extends Component<IProps> {
  public render() {
    const { avatarSrc, content, date, name } = this.props;
    return (
      <>
        <a href="/" className="avatar">
          <img alt="avatar" src={avatarSrc} />
        </a>
        <section className="content">
          <a href="/" className="author">
            {name}
          </a>
          <span className="metadata">
            <time className="date">{date.toLocaleDateString()}</time>
          </span>
          <p className="text">{content}</p>
        </section>
      </>
    );
  }
}
