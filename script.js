const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "913ede7da1msh42eb21a68ca8e6ep180d61jsn7e78d0eeacdd",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
    Name.innerHTML  = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
  .then((responce) => responce.json())
  .then((responce) => {
    console.log(responce)

    cloud_pct.innerHTML = responce.cloud_pct
    feels_like.innerHTML = responce.feels_like
    humidity.innerHTML= responce.humidity
    max_temp.innerHTML= responce.max_temp
    min_temp.innerHTML = responce.min_temp
    sunrise.innerHTML = responce.sunrise
    sunset.innerHTML = responce.sunset
    temp.innerHTML = responce.temp
    wind_speed.innerHTML = responce.wind_speed
    wind_degrees.innerHTML =responce.wind_degrees
  })
  .catch((err) => console.error(err));
}
submit.addEventListener("click",(e) => {
    e.preventDefault()
    getWeather(city.value)
})  
getWeather("Godhra")
