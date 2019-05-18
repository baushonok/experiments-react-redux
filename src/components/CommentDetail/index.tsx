import React, { Component } from 'react';

interface IProps {
  avatarSrc: string;
  content: string;
  date: Date;
  authorName: string;
}

export default class CommentDetail extends Component<IProps> {
  public render() {
    const { avatarSrc, content, date, authorName } = this.props;
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={avatarSrc} />
        </a>
        <section className="content">
          <a href="/" className="author">
            {authorName}
          </a>
          <span className="metadata">
            <time className="date">{date.toLocaleDateString()}</time>
          </span>
          <p className="text">{content}</p>
        </section>
      </div>
    );
  }
}
