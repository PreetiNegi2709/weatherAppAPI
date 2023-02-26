btnC.addEventListener('click',async function(e){
    // alert("ok")
    let city = document.getElementById("cityName").value
    console.log(city)


    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"+&appid=cbe3dd267a18f6c89943b3eff94f1ed7&units=metric")
    let finalData = await data.json()
    console.log(finalData)
    console.log(finalData.name)

    let disWeather = document.getElementsByClassName("api")
    disWeather.innerHTML= `<div class="apiCity"> ${finalData.name} </div>
    <div class="apiCountry"> ${finalData.sys.country} </div>
    <div class="apiTemp"> ${finalData.main.temp} </div>
    <div class="apiHumidity"> ${finalData.main.humidity} </div>
    <div class="apiWind"> ${finalData.wind.speed} </div>`

})