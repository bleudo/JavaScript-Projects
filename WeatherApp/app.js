const API_KEY = "0e3d15053bb70331011071cd8de579f1";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const SEARCH_BOX = document.querySelector('.search input');
const SEARCH_BOTON = document.querySelector('.search button');
const WEATHER_ICON = document.querySelector('.weather-icon');

async function checkWeather(city){
    const RESPONSE = await fetch(API_URL + city + `&appid=${API_KEY}`); //busca la data

    let data = await RESPONSE.json(); //muestra la data de REPONSE
    console.log(data);

    if(RESPONSE.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        if(data.weather[0].main == 'Clouds'){
            WEATHER_ICON.src = "./css/images/clouds.png"
         }
         else if(data.weather[0].main == 'Clear'){
             WEATHER_ICON.src = "./css/images/clear.png"
         }else if(data.weather[0].main == 'Rain'){
             WEATHER_ICON.src = "./css/images/rain.png"
         }else if(data.weather[0].main == 'Drizzle'){
             WEATHER_ICON.src = "./css/images/drizzle.png"
         }else if(data.weather[0].main == 'Mist'){
             WEATHER_ICON.src = "./css/images/mist.png"
         }
     
         document.querySelector('.weather').style.display = "block"
         document.querySelector('.error').style.display = 'none';
    }
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds'){
       WEATHER_ICON.src = "./css/images/clouds.png"
    }
    else if(data.weather[0].main == 'Clear'){
        WEATHER_ICON.src = "./css/images/clear.png"
    }else if(data.weather[0].main == 'Rain'){
        WEATHER_ICON.src = "./css/images/rain.png"
    }else if(data.weather[0].main == 'Drizzle'){
        WEATHER_ICON.src = "./css/images/drizzle.png"
    }else if(data.weather[0].main == 'Mist'){
        WEATHER_ICON.src = "./css/images/mist.png"
    }

    document.querySelector('.weather').style.display = "block"
}

SEARCH_BOTON.addEventListener("click", () =>{
    checkWeather(SEARCH_BOX.value); //checkWeather va a hacer el request de con el valor dentro de SEARCH_BOX. 
                                    //Es decir que esta funcion se encarga de buscar lo que esta en la SEARCH_BOX. 
})
