import React from "react";

const Weather = props => (
  <div className="weather-container">
    {props.city && props.country && (
      <div style={{display:'flex',marginBottom:'5%'}}>
        <div className="weather-container-title">Location : </div><div className="weather-container-info">{props.city}, {props.country}</div>
      </div>
    )}
    {props.temprature && <div style={{display:'flex',marginBottom:'5%'}}><div className="weather-container-title">Temprature : </div><div className="weather-container-info">{props.temprature}</div></div>}
    {props.humidity && <div style={{display:'flex',marginBottom:'5%'}}><div className="weather-container-title">Humidity : </div><div className="weather-container-info">{props.humidity}</div></div>}
    {props.description && <div style={{display:'flex',marginBottom:'5%'}}><div className="weather-container-title">Conditions : </div><div className="weather-container-info">{props.description}</div></div>}
  </div>
);

export default Weather;
