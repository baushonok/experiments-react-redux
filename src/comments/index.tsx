import React from 'react';

import faker from 'faker';

import Comment from 'components/Comment';

export default function Comments() {
  function generateComments(amount: number = 1) {
    const rows = [];
    for (let i = 0; i < amount; i++) {
      rows.push(
        <li className="comment">
          <Comment
            avatarSrc={faker.image.avatar()}
            content={faker.lorem.sentence()}
            date={faker.date.past()}
            name={faker.name.firstName()}
          />
        </li>,
      );
    }

    return rows;
  }

  return (
    <>
      <h1 className="ui header">Comments</h1>
      <ul className="ui container comments">{generateComments(5)}</ul>
    </>
  );
}
