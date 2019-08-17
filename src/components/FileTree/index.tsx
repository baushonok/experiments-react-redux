import React, { Component } from 'react';

import Directory from './Directory';
import File from './File';
import { IFileTreeItem, IProps, IState } from './types';

export default class FileTree extends Component<IProps, IState> {
  public readonly state: IState = {
    selectedFileId: '',
  };

  public render() {
    const {
      data: { files = [], name },
    } = this.props;
    const { selectedFileId } = this.state;

    if (files.length === 0) {
      return null;
    }

    return files.map((file: IFileTreeItem, index: number) => {
      const key = `${name}_${index}`;
      return file.isDirectory ? (
        <Directory data={file} key={key} onSelectFile={this.selectFile} selectedFileId={selectedFileId} />
      ) : (
        <File data={file} key={key} onSelect={this.selectFile} selectedFileId={selectedFileId} />
      );
    });
  }

  private selectFile = (id: string) => {
    this.setState({
      selectedFileId: id,
    });
  };
}
