import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '99cf19faac0d37b69a3f8e39a568ad0c';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metrics',
            APPID: API_KEY,
        }
    });

    return data;
}