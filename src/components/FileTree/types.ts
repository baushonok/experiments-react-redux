export interface IFileTreeItem {
  id: string;
  name: string;
  isDirectory: boolean;
  files?: IFileTreeItem[];
}

export interface IProps {
  data: IFileTreeItem;
}

export interface IState {
  selectedFileId: string;
}
