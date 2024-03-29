import React, { Component } from 'react'

import LapTime from './LapTime'

class DurationWithFuel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuelLoad: 60.0,
      extraLaps: 1
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({fuelLoad: event.target.value});
  }

  lapsAtFuelUsage() {
    return Math.ceil(this.state.fuelLoad / this.props.fuelPerLap);
  }

  durationForLaps(laps) {
    return laps * this.props.lapTime
  }

  render() {
    return (
      <>
        <h4>Consumption</h4>
        <div className="form-group row">
          <label className="col-sm-4 col-form-label">Fuel load in l:</label><br />
          <div className="col-sm-8">
            <input type="number" className="form-control" value={this.state.fuelLoad} step='1.0' onChange={this.handleChange} />
            <input type="range" value={this.state.fuelLoad} onChange={this.handleChange} step='1.0' className="form-control-range" min="1" max="120" />
            </div>
          </div>
        <p>Remaining laps: {this.lapsAtFuelUsage() }</p>
        <p>
          Remaining time: <LapTime duration={this.durationForLaps( this.lapsAtFuelUsage() )} />
        </p>
      </>
    )
  }
}

export default DurationWithFuel;
