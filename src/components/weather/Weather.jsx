import moment from 'moment';

const WeatherCard = ({ weatherData }) => (
  <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{weatherData.name}</h5>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Temprature: {weatherData.main.temp} &deg;C</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Description: {weatherData.weather[0].main}</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Humidity: {weatherData.main.humidity} %</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Day: {moment().format('dddd')}</p>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Date: {moment().format('LL')}</p>
    <a href="https://github.com/delllc/weather-app" className="inline-flex items-center text-blue-600 hover:underline">
      Github
      <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
  </div>
)



export default WeatherCard;
