import React, { Component } from 'react';

import { IProps } from './types';

import './index.css';

export default class File extends Component<IProps> {
  public render() {
    const {
      data: { name },
    } = this.props;

    return (
      <>
        <span className={`file ${this.isSelected ? 'selected' : ''}`} onClick={this.handleSelect}>
          {name}
        </span>
        {this.isSelected ? (
          <button type="button" onClick={this.removeFile}>
            Remove
          </button>
        ) : null}
      </>
    );
  }

  private get isSelected() {
    const {
      selectedFileId,
      data: { id },
    } = this.props;

    return selectedFileId === id;
  }

  private handleSelect = () => {
    const {
      onSelect,
      data: { id },
    } = this.props;

    onSelect(id);
  };

  private removeFile = () => {};
}
