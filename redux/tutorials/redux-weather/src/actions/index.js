import axios from 'axios';

const API_KEY = '9cb4ea44e405dfb595a683188e8a5190';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'; //To use in reducer and make the
                                        //action_type consistent accross multiple files.

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},IN`;
  const request = axios.get(url);
  console.log('Request:',request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
