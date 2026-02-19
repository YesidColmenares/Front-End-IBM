//El código anterior previene el comportamiento predeterminado de un evento, como el envío de un formulario, 
//dentro de una función llamada showweatherDetails.

function showweatherDetails(event){
    event.preventDefault();
}

const city = document.getElementById('city').value;
const apiKey = '5a605d3456c4176594c9a1e80a953a5d';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},CO&appid=${apiKey}&units=metric`;


/*
La función anterior fetch inicia una solicitud HTTP asincrónica a la apiUrl especificada (API de OpenWeatherMap) para recuperar datos meteorológicos.

El manejo de la respuesta se realiza mediante una promesa con .then() para procesar la respuesta, primero convirtiéndola a formato JSON response.json(), 
y luego accediendo a los datos resultantes.

El archivo HTML también se está actualizando dinámicamente el contenido HTML seleccionando el elemento 'weatherInfo', poblándolo con información 
meteorológica estructurada como el nombre de la ciudad data.name, la temperatura data.main.temp, y la descripción del clima data.weather[0].description, 
asegurando una visualización legible para el usuario de los detalles meteorológicos obtenidos en la página web.

Luego incluye el siguiente código fuera de la función. Esto adjunta un listener de eventos al elemento 'weatherForm', escuchando un evento 'submit' y 
activando la función showweatherDetails al enviar el formulario, permitiendo un manejo o manipulación personalizada del comportamiento del formulario.

*/

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;             
    })
    .catch(error => {
              console.error('Error fetching weather:', error);
              const weatherInfo = document.getElementById('weatherInfo');
              weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
});

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );