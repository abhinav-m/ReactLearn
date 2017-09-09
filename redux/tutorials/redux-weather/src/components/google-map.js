import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    //Generally if we want to integrate third party libraries, we can use the refs functionality is react.
    new google.maps.Map(this.refs.map,{
      zoom:12,
      center: {
        lat:this.props.lat,
        lng:this.props.lon
      }
    });
  }

render(){
  return <div ref='map'/>;
}

}

export default GoogleMap;
