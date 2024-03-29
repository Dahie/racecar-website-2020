import React, { Component } from 'react'

import Select from 'react-select';

import DurationWithFuel from './DurationWithFuel'
import FuelForDurations from './FuelForDurations'
import LapTime from './LapTime'

let lapTimePresets = [];
for(let time = 60000; time < 200000; time += 1000) {
  let milliseconds = parseInt((time % 1000) / 100),
      seconds = Math.floor((time / 1000) % 60),
      minutes = Math.floor((time / (1000 * 60)) % 60);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let label = minutes + ":" + seconds;

  lapTimePresets.push({ value: time / 1000, label: label })
}

class FuelCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lapTime: 126,
      fuelPerLap: 3.5,
      extraLaps: 1
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeLapTime = this.changeLapTime.bind(this);
  }

  changeLapTime(event) {
    this.setState({lapTime: event.target.value});
  }

  handleChange(event) {
    this.setState({fuelPerLap: event.target.value});
  }

  render() {
    const { lapTime, fuelPerLap } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Lap time: <LapTime duration={lapTime} /></label>
                <div className="col-sm-8">
                  <input type="range" value={lapTime} onChange={this.changeLapTime} className="form-control-range" min="60" max="180" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Fuel use in l per Lap:</label>
                <div className="col-sm-8">
                  <input type="number" className="form-control" value={fuelPerLap} step='0.1' onChange={this.handleChange} />
                  <input type="range" value={fuelPerLap} onChange={this.handleChange} step='0.1' className="form-control-range" min="1" max="10" />
                </div>
              </div>
              <DurationWithFuel
                lapTime={lapTime}
                fuelPerLap={fuelPerLap} />
            </div>
            <div className="col-md-6">
              <FuelForDurations
                lapTime={lapTime}
                fuelPerLap={fuelPerLap} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FuelCalculator;
