btnC.addEventListener('click',async function(e){
    // alert("ok")
    let city = document.getElementById("cityName").value
    console.log(city)


    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"+&appid=cbe3dd267a18f6c89943b3eff94f1ed7&units=metric")
    let finalData = await data.json()
    console.log(finalData)
    // console.log(finalData.name)

    let disWeather = document.querySelector(".api")
    disWeather.innerHTML= `<div class="apiCity"> <h2>${finalData.name} </h2></div>
    <div class="apiCountry"> <p> Country : ${finalData.sys.country} </p> </div>
    <div class="apiTemp"> <p>Temperature : <span class="numberFont">${finalData.main.temp}°C</span> </p> </div>
    <div class="apiHumidity"> <p>Humidity : <span class="numberFont">${finalData.main.humidity}% </span></p> </div>
    <div class="apiWind"> <p> Wind's Speed : <span class="numberFont">${finalData.wind.speed}m/hr</span> </p> </div>`

})
