import React, { ChangeEvent, Component, FormEvent } from 'react';

import { IProps, IState } from './types';

export default class SearchBar extends Component<IProps, IState> {
  public readonly state = {
    searchString: '',
  };
  public render() {
    const { searchString } = this.state;
    return (
      <div className="ui segment">
        <form className="search-bar ui form" onSubmit={this.handleInputChange} onBlur={this.handleInputChange}>
          <div className="field">
            <label htmlFor="image-search">Image Search</label>
            <input
              id="image-search"
              type="text"
              placeholder="Input some text"
              value={searchString}
              onChange={this.handleChangeSearchString}
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    );
  }
  private handleChangeSearchString = (event: ChangeEvent<HTMLInputElement>) => {
    const searchString = event.target.value;
    this.setState({ searchString });
  };
  private handleInputChange = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { searchString } = this.state;
    this.props.onInputChange(searchString);
  };
}
