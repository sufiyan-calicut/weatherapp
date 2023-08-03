import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import './forecast.css'

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek));

  console.log("forecastDays", forecastDays);
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data?.list?.splice(0, 7).map((item, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="icon-small"
                      src={`icons/${item?.weather[0]?.icon}.png`}
                    />
                    <label className="day">{forecastDays[index]}</label>
                    <label className="description">
                      {item?.weather[0]?.description}
                    </label>
                    <label className="min-max">
                      {Math.round(item?.main?.temp_min)}°C /{" "}
                      {Math.round(item?.main?.temp_max)}°C{" "}
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-gridItem">
                        <label>Pressure</label>
                        <label>{item.main.pressure}hpa</label>
                    </div>
                    <div className="daily-details-gridItem">
                        <label>Humidity</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-gridItem">
                        <label>Clouds</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-gridItem">
                        <label>Wind Speed</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-gridItem">
                        <label>Sea level</label>
                        <label>{item.main.sea_level} m/s</label>
                    </div>
                    <div className="daily-details-gridItem">
                        <label>Feels like</label>
                        <label>{Math.round(item.main.feels_like)}°C</label>
                    </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
