import React, {Component} from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map'

 class WeatherList extends Component {

renderWeather(cityData) {
  const {lon,lat} = cityData.city.coord;
  const name = cityData.city.name;
  const temps = cityData.list.map( v =>  Math.ceil(v.main.temp - 273.15) );
  const pressures = cityData.list.map( v =>  v.main.pressure );
  const humidities = cityData.list.map( v =>  v.main.humidity );
  console.log(temps);

  return(
    <tr key={name}>
    <td><GoogleMap lat={lat} lon ={lon}/></td>
    <td>
<Chart data = {temps} color ='orange' units='°C'/>
    </td>
    <td>
<Chart data = {pressures} color ='green' units='hPa'/>
    </td>
    <td>
<Chart data = {humidities} color ='blue' units='%'/>
    </td>
    </tr>
  )
}

  render(){
    return(
      <table className='table table-hover'>
      <thead>
      <tr>
      <th>City</th>
        <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
      </tr>
      </thead>
      <tbody>
      {this.props.weather.map(this.renderWeather)}
      </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
return  {weather};
}

export default connect(mapStateToProps)(WeatherList);
