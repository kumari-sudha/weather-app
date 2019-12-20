import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";
import { Grid, Cell } from "react-mdl";

const API_KEY = "a45b45189aacd366c787a6dc8d914cf1";

class App extends React.Component {
  state = {
    temprature: undefined,
    error: undefined,
    humidity: undefined,
    description: undefined,
    city: undefined,
    country: undefined
  };

  getWeather = async e => {
    e.preventDefault(); // e is event object in js to prevent re-render behaviour f=of this function again and again (for single page application)
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json(); // converts into a languange which is understood by react and js
    if (city && country) {
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temprature: undefined,
        error: "Please enter the value",
        humidity: undefined,
        description: undefined,
        city: undefined,
        country: undefined
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Grid className="container">
          <Cell col={5} className="title-container" style={{marginRight:0}}>
            <Title />
          </Cell>
          <Cell col={7} className="form-weather-container" style={{marginLeft:0}}>
            <Form getWeather={this.getWeather} />
            <Weather
              temprature={this.state.temprature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default App;
