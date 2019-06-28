console.log("Hello");
fetch(
  "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/7e388af56d7619ac837b81dad7f34a94/45.4864132,-122.5809668",
  {
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }
)
  .then(function(response) {
    return response.json();
  })
  .then(function(forecast) {
    var temp = forecast.currently.temperature;
    var tempElement = document.getElementById("temp");
    tempElement.textContent = Math.round(temp) + "° F";
    var summary = forecast.currently.summary;
    var summaryElement = document.getElementById("summary");
    summaryElement.textContent = summary;
  });
