import { Season, SeasonIcon } from './types';

export const SEASON_CONFIG = {
  [Season.SUMMER]: {
    iconName: SeasonIcon.SUMMER,
    message: 'Lets hit the beach!',
  },
  [Season.WINTER]: {
    iconName: SeasonIcon.WINTER,
    message: 'Burr, it is chilly',
  },
};
