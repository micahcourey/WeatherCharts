const API_KEY = '19c6169735fb5e3ad987bc8870884fed';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  };
}
