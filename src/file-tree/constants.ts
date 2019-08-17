import { IFileTreeItem } from 'components/FileTree/types';

export const data: IFileTreeItem = {
  files: [
    {
      id: '0-0',
      isDirectory: false,
      name: 'file',
    },
    {
      files: [
        {
          id: '0-1-0',
          isDirectory: false,
          name: 'file',
        },
        {
          id: '0-1-1',
          isDirectory: false,
          name: 'file',
        },
      ],
      id: '0-1',
      isDirectory: true,
      name: 'directory',
    },
    {
      id: '0-2',
      isDirectory: true,
      name: 'directory',
    },
  ],
  id: '0',
  isDirectory: true,
  name: 'root',
};
