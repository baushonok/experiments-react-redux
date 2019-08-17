import { IFileTreeItem } from '../types';

export interface IProps {
  data: IFileTreeItem;
  selectedFileId: string;
  onSelectFile: (id: string) => void;
}

export interface IState {
  showList: boolean;
}
