import React, { Component } from 'react';

import File from '../File';
import { IFileTreeItem } from '../types';
import { IProps, IState } from './types';

import './index.css';

export default class Directory extends Component<IProps, IState> {
  public readonly state: IState = {
    showList: false,
  };

  public render() {
    const {
      data: { name, files = [] },
      selectedFileId,
      onSelectFile,
    } = this.props;
    const { showList } = this.state;

    return (
      <div className="directory">
        <button type="button" onClick={this.toggleVisibility}>
          {name}
        </button>
        <ul className={`files ${showList ? '' : 'hidden'}`}>
          {files.map((file: IFileTreeItem, index: number) => (
            <li key={`${name}_${index}`}>
              <File data={file} onSelect={onSelectFile} selectedFileId={selectedFileId} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  private toggleVisibility = () => {
    this.setState(state => ({
      showList: !state.showList,
    }));
  };
}
