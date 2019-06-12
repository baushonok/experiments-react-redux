import React, { ChangeEvent, Component } from 'react';

import { IProps, IState } from './types';

export default class SearchBar extends Component<IProps, IState> {
  public readonly state = {
    searchString: '',
  };
  public render() {
    const { searchString } = this.state;
    return (
      <div className="ui segment">
        <form className="search-bar ui form">
          <div className="field">
            <label htmlFor="image-search">Image Search</label>
            <input id="image-search" type="text" value={searchString} onChange={this.handleChangeSearchString} />
          </div>
        </form>
      </div>
    );
  }
  private handleChangeSearchString = (event: ChangeEvent<HTMLInputElement>) => {
    const searchString = event.target.value;
    this.setState({ searchString });
    this.props.onInputChange(searchString);
  };
}
