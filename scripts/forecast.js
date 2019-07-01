class Forecast {
  constructor() {
    this.key = "o7zulX5cPAw84jswQz2WGOXFsyq36912";
    this.weatherURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);

    return { cityDets, weather };
  }
  async getCity(city) {
    // const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${this.key}&q=${city}`;

    const response = await fetch(this.cityURI + query);
    const data = await response.json();

    return data[0];
  }
  async getWeather(citycode) {
    // const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${citycode}?apikey=${this.key}`;

    const response = await fetch(this.weatherURI + query);
    const data = await response.json();

    return data[0];
  }
}

// const key = 'o7zulX5cPAw84jswQz2WGOXFsyq36912';

// // get weather
// const getWeather = async (citycode) => {

//     const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//     const query = `${citycode}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];
// };

// // get city
// const getCity = async (city) => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];
// }
