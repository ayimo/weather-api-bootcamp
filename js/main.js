// api key: d90ff8cf2b9f828e5633fd9ca45f0634

const weather={
  fahrenheit: document.getElementById("imperial"),
  celcius: document.getElementById("metric"),
  temp: document.getElementById("temp"),
  getTemp(e){
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    const units = whichUnit(e);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=0f8d637a2552fece8a600d7f063c3a3d&units=${units}`)
      .then(response =>response.json())
      .then(data =>{
        if(units =="imperial"){
          weather.temp.innerHTML= Math.floor(data.main.temp) + "°F"
        }else{
          weather.temp.innerHTML= Math.floor(data.main.temp) + "°C"
        }
      })
  }
}
function whichUnit(e){
  if (e.target.id=="imperial"){
    return "imperial"
  } else if(e.target.id=="metric"){
    return "metric"
  }
}
weather.fahrenheit.addEventListener("click", weather.getTemp);
weather.celcius.addEventListener("click", weather.getTemp)
