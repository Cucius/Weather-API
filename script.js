var weatherSection = document.querySelector("#weatherSection");
var count = 0;
//object to show weather
var weather = {
  APIkey: "501721a232530766e41f1ad70cfed92b",
  //Call weather based on city defined
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + weather.APIkey)
      .then((response) => response.json())
      .then((data) => weather.displayWeather(data));
  },
  displayWeather: function (data) {
    for (var i = 0; i < 35; i += 8) {
      var dataList = data.list[i];
      var newWeatherCard = document.createElement("div");
      newWeatherCard.setAttribute("class", "card col-4");
      // newWeatherCard.style.width = "100%";
      weatherSection.append(newWeatherCard);

      var weatherCardBody = document.createElement("div");
      weatherCardBody.setAttribute("class", "card-body m-2");
      newWeatherCard.append(weatherCardBody);

      //Create p tags to display weather conditions

      var newDateText = document.createElement("p");
      newDateText.setAttribute("class", "dateText");
      weatherCardBody.append(newDateText);

      var newCardIcon = document.createElement("img");
      newCardIcon.setAttribute("class", "card-img-top");
      weatherCardBody.append(newCardIcon);

      var newDescription = document.createElement("p");
      newDescription.setAttribute("class", "description");
      weatherCardBody.append(newDescription);

      var newTemp = document.createElement("p");
      newTemp.setAttribute("class", "temperature");
      weatherCardBody.append(newTemp);

      var newFeelsLike = document.createElement("p");
      newFeelsLike.setAttribute("class", "feels-like");
      weatherCardBody.append(newFeelsLike);

      var newHumidity = document.createElement("p");
      newHumidity.setAttribute("class", "humidity");
      weatherCardBody.append(newHumidity);

      var newWindSpeed = document.createElement("p");
      newWindSpeed.setAttribute("class", "wind-speed");
      weatherCardBody.append(newWindSpeed);

      var newUvIndex = document.createElement("p");
      newUvIndex.setAttribute("class", "uvIndex");
      weatherCardBody.append(newUvIndex);

      // document.body.children["appBody"].children["weatherSection"].createElement("div");
      //Weather conditions
      var { icon, description } = dataList.weather[0];
      var { dt_txt } = dataList;
      var { temp, humidity } = dataList.main;
      var { speed } = dataList.wind;
      var { feels_like } = dataList.main;
      var { lat, lon } = data.city.coord;
      localStorage.setItem("latitude", lat.toFixed(2));
      localStorage.setItem("longitude", lon.toFixed(2));

      // console.log(name, icon, description, temp, humidity, speed);

      //Display Weather data in the weather card

      newDateText.innerText = new Date(dt_txt).toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "short", day: "numeric" });

      newCardIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + icon + "@2x.png");

      newDescription.innerText = description;

      newTemp.innerText = "Temperature : " + temp + "°F";

      newFeelsLike.innerText = "Feels Like : " + feels_like + "°F";

      newHumidity.innerText = "Humidity : " + humidity + "%";

      newWindSpeed.innerText = "Wind Speed : " + speed + "mph";

      newUvIndex.innerText = "UV : ";
    }
  },
  search: function () {
    weather.fetchWeather(document.querySelector("#cityInput").value);
  },
};
//search button from users input
document.querySelector(".container button").addEventListener("click", function () {
  weather.search();
  getUVIndex();
  clear();
});
//Return keypress starts search function
document.querySelector("#cityInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    weather.search();
    getUVIndex();
    clear();
  }
});

function clear() {
  count++;
  console.log(count);
  if (count > 1) {
    weatherSection.innerText = "";
  }
}

function getUVIndex() {
  //   var lat = $("#lat").val();
  //   var lng = $("#lng").val();
  var latitude = localStorage.getItem("latitude");
  var longitude = localStorage.getItem("longitude");
  console.log(latitude, longitude);

  $.ajax({
    type: "GET",
    dataType: "json",
    beforeSend: function (request) {
      request.setRequestHeader("x-access-token", "fa2b78e8d5d381bc76d786acda45e790");
    },
    url: "https://api.openuv.io/api/v1/uv?lat=" + latitude + "&lng=" + longitude,
    success: function (response) {
      //handle successful response
      if (response === 200);
      console.log("success");
      $.then((response) => response.json());
      $.then((data) => console.log(data));
    },
    error: function (response) {
      // handle error response
      if (response !== 200);
      console.log("Fail");
    },
  });
}
// var uv = {
//   uvAPIkey: "fa2b78e8d5d381bc76d786acda45e790",
//   //Call weather based on city defined
//   fetchUV: function (city) {
//     fetch("https://api.openuv.io/api/v1/uv?lat=" + latitude + "&lng" + longitude)
//       .then((response) => response.json())
//       .then((data) => weather.displayWeather(data));
//   },
// };
