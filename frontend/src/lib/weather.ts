import { Weather } from './models';
import { weatherData } from './weather-data';

const makeWeather = (data?: any) : Weather => {
  return {
    id: data.id,
    name: data.name,
    emoji: weatherData[data.id].emoji,
  };
}

export {
  makeWeather,
}
