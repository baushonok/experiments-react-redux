export interface IState {
  searchString: string;
}

export interface IProps {
  onInputChange: (searchString: string) => void;
}
