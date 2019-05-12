import React from 'react';

import './index.css';

export default function Form() {
  const style = { backgroundColor: 'blue', color: 'white' };

  return (
    <form className="form">
      <label htmlFor="name" className="form__label">
        Enter name:
      </label>
      <input type="text" id="name" className="form__input" />
      <button type="submit" style={style}>
        Submit
      </button>
    </form>
  );
}
