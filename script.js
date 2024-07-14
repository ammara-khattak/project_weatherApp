
document.addEventListener("DOMContentLoaded", () => {
const apikey='e6371c82234630a134135f7a565d0323';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city){
    const response=await fetch(apiUrl +city+`&appid=${apikey}`);

    if(response.status==404){
       document.querySelector(".error").style.display="block" 
       document.querySelector(".weather").style.display="none" 
    }
    else{
        var  data=await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML=data.wind.speed +"km/h";
        
        if (data.weather && data.weather[0] && weatherIcon) {
            switch (data.weather[0].main.toLowerCase()) {
                case 'clouds':
                    weatherIcon.src = "images/clouds.png";
                    break;
                case 'clear':
                    weatherIcon.src = "images/clear.png";
                    break;
                case 'drizzle':
                    weatherIcon.src = "images/drizzle.png";
                    break;
                case 'humidity':
                    weatherIcon.src = "images/humidity.png";
                    break;
                case 'rain':
                    weatherIcon.src = "images/rain.png";
                    break;
                case 'mist':
                    weatherIcon.src = "images/mist.png";
                    break;
                    case 'snow':
                        weatherIcon.src = "images/snow.png";
                        break;
            
            
        
                default:
                    weatherIcon.src = ""; // Provide a default or clear icon
                    break;
            }
             
            document.querySelector(".weather").style.display="block" 
    document.querySelector(".error").style.display="none"
    }
    
// } else {
//     console.error('Weather data or weather icon element is not found.');
// }
}






















// if(data.weather[0].main=="clouds"){
//     weatherIcon.src="images/clouds.png"
// }
// else if(data.weather[0].main=="clear"){
//     weatherIcon.src="images/clear.png"
// }
// else if(data.weather[0].main=="drizzle"){
//     weatherIcon.src="images/drizzle.png"
// }
// else if(data.weather[0].main=="humidity"){
//     weatherIcon.src="images/humidity.png"
// }
// else if(data.weather[0].main=="rain"){
//     weatherIcon.src="images/rain.png"
// }
// else if(data.weather[0].main=="mist"){
//     weatherIcon.src="images/mist.png"
// }
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)

})
})







// function checkWeather() {
//     const apiKey = 'e6371c82234630a134135f7a565d0323'; // Replace with your actual API key
//     const city = 'germany';
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(url+city)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             // Handle the weather data here
//         }) 
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }