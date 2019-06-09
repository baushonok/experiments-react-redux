export interface IProps {
  season: Season | null;
  errorMessage: string;
}

export enum Season {
  WINTER = 'winter',
  SUMMER = 'summer',
}
