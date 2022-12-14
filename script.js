var weatherSection = document.querySelector("#weatherSection");
var currentWeather = document.querySelector("#currentWeather");
var count = 0;
// var cities = [];
var uv = localStorage.getItem("uv");
//object to show weather
var weather = {
  APIkey: "501721a232530766e41f1ad70cfed92b",
  //Call weather based on city defined
  fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + weather.APIkey)
      .then((response) => response.json())
      .then((data) => weather.displayWeather(data));
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + weather.APIkey)
      .then((response) => response.json())
      .then((data) => weather.displayCurrentWeather(data));
  },
  displayCurrentWeather: function (data) {
    var currentDataList = data.list[0];
    var newWeatherCard = document.createElement("div");
    newWeatherCard.setAttribute("class", "card col-4");
    // newWeatherCard.style.width = "100%";
    currentWeather.append(newWeatherCard);

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

    //displays uv and color for severity
    var newUvIndex = document.createElement("p");
    if (uv <= 3) {
      newUvIndex.setAttribute("style", "background-color: #558B2F");
    } else if (uv > 3 && uv < 6) {
      newUvIndex.setAttribute("style", "background-color: #F9A825");
    } else if (uv > 6 && uv < 8) {
      newUvIndex.setAttribute("style", "background-color: #EF6C00");
    } else if (uv > 8 && uv < 11) {
      newUvIndex.setAttribute("style", "background-color: #B71C1C");
    } else if (uv > 11) {
      newUvIndex.setAttribute("style", "background-color: #6A1B9A");
    }
    newUvIndex.setAttribute("class", "uvIndex");
    newUvIndex.setAttribute("style", "background-color: grey");
    weatherCardBody.append(newUvIndex);

    // document.body.children["appBody"].children["weatherSection"].createElement("div");
    //Weather conditions
    var { icon, description } = currentDataList.weather[0];
    var { dt_txt } = currentDataList;
    var { temp, humidity } = currentDataList.main;
    var { speed } = currentDataList.wind;
    var { feels_like } = currentDataList.main;
    var { lat, lon } = data.city.coord;
    localStorage.setItem("latitude", lat.toFixed(2));
    localStorage.setItem("longitude", lon.toFixed(2));

    // console.log(name, icon, description, temp, humidity, speed);

    //Display Weather data in the weather card

    newDateText.innerText = new Date(dt_txt).toLocaleDateString("en-us", { weekday: "long", year: "numeric", month: "short", day: "numeric" });

    newCardIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");

    newDescription.innerText = description;

    newTemp.innerText = "Temperature : " + temp + "??F";

    newFeelsLike.innerText = "Feels Like : " + feels_like + "??F";

    newHumidity.innerText = "Humidity : " + humidity + "%";

    newWindSpeed.innerText = "Wind Speed : " + speed + "mph";

    newUvIndex.innerText = "UV Index : " + uv;
  },

  displayWeather: function (data) {
    for (var i = 7; i <= 40; i += 8) {
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

      //displays uv and color for severity
      var newUvIndex = document.createElement("p");
      if (uv <= 3) {
        newUvIndex.setAttribute("style", "background-color: #558B2F");
      } else if (uv > 3 && uv < 6) {
        newUvIndex.setAttribute("style", "background-color: #F9A825");
      } else if (uv > 6 && uv < 8) {
        newUvIndex.setAttribute("style", "background-color: #EF6C00");
      } else if (uv > 8 && uv < 11) {
        newUvIndex.setAttribute("style", "background-color: #B71C1C");
      } else if (uv > 11) {
        newUvIndex.setAttribute("style", "background-color: #6A1B9A");
      }
      newUvIndex.setAttribute("class", "uvIndex");
      newUvIndex.setAttribute("style", "background-color: grey");
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

      newCardIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");

      newDescription.innerText = description;

      newTemp.innerText = "Temperature : " + temp + "??F";

      newFeelsLike.innerText = "Feels Like : " + feels_like + "??F";

      newHumidity.innerText = "Humidity : " + humidity + "%";

      newWindSpeed.innerText = "Wind Speed : " + speed + "mph";

      newUvIndex.innerText = "UV Index : " + uv;
    }
  },
  search: function () {
    weather.fetchWeather(document.querySelector("#cityInput").value);
    localStorage.setItem("city", document.querySelector("#cityInput").value);
    weather.store(document.querySelector("#cityInput").value);
  },
  store: function (cities) {
    var city = [];
    for (var i = 0; i < cities.length; i++) {
      city.push(cities[i]);
    }
    localStorage.setItem("cities", city.join(""));
  },
};

var uvIndex = {
  getUVIndex: function () {
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
      },
      error: function (response) {
        // handle error response
        if (response !== 200);
        console.log("Fail");
        localStorage.setItem("uv", "Not Available");
      },
    }).then((data) => uvIndex.displayUVIndex(data));
  },
  displayUVIndex: function (data) {
    var dataResult = data.result;
    var { uv } = dataResult;
    localStorage.setItem("uv", uv);
  },
  //   var { uv } = data.result;
};
//search button from users input
document.querySelector(".container button").addEventListener("click", function () {
  weather.search();
  uvIndex.getUVIndex();
  clear();
});
//Return keypress starts search function
document.querySelector("#cityInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    weather.search();
    uvIndex.getUVIndex();
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

// var uv = {
//   uvAPIkey: "fa2b78e8d5d381bc76d786acda45e790",
//   //Call weather based on city defined
//   fetchUV: function (city) {
//     fetch("https://api.openuv.io/api/v1/uv?lat=" + latitude + "&lng" + longitude)
//       .then((response) => response.json())
//       .then((data) => weather.displayWeather(data));
//   },
// };
