import { formatDay, getWeatherIcon } from "./App";

function Weather(weather) {
  console.log(weather);
  const { displayLocation: location } = weather.location;
  console.log(location);
  //   console.log(location);
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weather.weather.weather;
  //   console.log(weather);
  //   console.log(max, min, dates, codes);
  //   console.log(weather.location);

  return (
    <div>
      <h2>weather {location}</h2>
      <ul className="weather">
        {dates.map((date, i) => (
          <Day
            date={date}
            max={max.at(i)}
            min={min.at(i)}
            code={codes.at(i)}
            key={date}
            isToday={i === 0}
          />
        ))}
      </ul>
    </div>
  );
}

export default Weather;

function Day({ date, max, min, code, isToday }) {
  return (
    <li className="day">
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : formatDay(date)}</p>
      <p>
        {Math.floor(max)}° - {Math.ceil(min)}°
      </p>
    </li>
  );
}
