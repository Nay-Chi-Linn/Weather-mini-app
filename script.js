
const apiKey = '2046be13538010a6e34875dc13d57f56';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
let inputText = document.getElementById('inputText');
const search = document.getElementById('search');
const formEl = document.querySelector('form');
const weather = document.querySelector('.weather');
const othWeather = document.querySelector('.othWeather');

const weatherInfo = async(city)=>{
    try{
        const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
        if(!response.ok){
            throw new Error('Network was not ok');
        }
        let data = await response.json();
        console.log(data);

        let weatherIcon = data.weather[0].icon;

        document.querySelector('.cityName').innerHTML=data.name;
        document.querySelector('.temperature').innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector('.description').innerHTML= data.weather[0].description;
        document.querySelector('#icon').innerHTML= `<img src="https://openweathermap.org/img/wn/${weatherIcon}.png" class="image" alt="Weather Icon">`;
        document.querySelector('.humiVal').innerHTML= data.main.humidity+'%';
        document.querySelector('.felVal').innerHTML= data.main.feels_like+'°C';
        document.querySelector('.windVal').innerHTML= Math.round(data.wind.speed)+'m/s';
        
    }catch(error){
        document.querySelector('.cityName').innerHTML="An error occured Try again later";
        document.querySelector('.temperature').innerHTML="";
        document.querySelector('.description').innerHTML= "";
        document.querySelector('#icon').innerHTML= "";
        document.querySelector('.humiVal').innerHTML= "";
        document.querySelector('.felVal').innerHTML= "";
        document.querySelector('.windVal').innerHTML= "";
        othWeather.style.display="none";
    }
    
}
formEl.addEventListener('submit',(event)=>{
    event.preventDefault();
    let city = inputText.value;
    weatherInfo(city);
    weather.style.display="block";
    othWeather.style.display= "flex";
})
