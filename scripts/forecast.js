const key = 'o7zulX5cPAw84jswQz2WGOXFsyq36912';

// get weather
const getWeather = async (citycode) => {

    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${citycode}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// get city
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

