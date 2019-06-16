import axios from 'axios';

import KEYS from '../keys';

const ACCESS_KEY = KEYS.unsplash.accessKey;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});
