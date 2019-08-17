import { IFileTreeItem } from '../types';

export interface IProps {
  data: IFileTreeItem;
  selectedFileId: string;
  onSelect: (id: string) => void;
}
