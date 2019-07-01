const cityForm = document.querySelector("form");
const details = document.querySelector(".details");
const card = document.querySelector(".card");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forecast = new Forecast();

const updateUI = data => {
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  const { cityDets, weather } = data;

  details.innerHTML = `

            <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
            `;

  // night and day images/ icons
  let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);
  // remove d-none class
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

// const updateCity = async (city) => {

//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.Key);

//     return { cityDets, weather };
// };

cityForm.addEventListener("submit", e => {
  // prevent default
  e.preventDefault();

  // get city
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui
  forecast
    .updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  // set local storage
  localStorage.setItem("city", city);
  console.log(localStorage.city);
});

if (localStorage.getItem("city")) {
  forecast
    .updateCity(localStorage.getItem("city"))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}
