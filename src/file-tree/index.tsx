import React from 'react';

import FileTree from 'components/FileTree';
import { data } from './constants';

export default function FileTreePage() {
  return <FileTree data={data} />;
}
