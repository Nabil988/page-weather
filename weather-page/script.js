const apiKey = 'YOUR_API_KEY';
const city = 'Nairobi';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const refreshButton = document.getElementById('refresh-btn');

async function fetchWeather() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    temperatureElement.textContent = `Temperature: ${temperature}°C`;
    descriptionElement.textContent = `Description: ${description}`;
    humidityElement.textContent = `Humidity: ${humidity}%`;
    windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Fetch weather data on page load
fetchWeather();

// Refresh weather data when the button is clicked
refreshButton.addEventListener('click', fetchWeather);