import React, { Component } from 'react'
import DurationWithFuel from './DurationWithFuel'
import FuelForDurations from './FuelForDurations'
import LapTime from './LapTime'
import Select from 'react-select';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lapTime: 126,
      fuelPerLap: 3.5,
      lap: { value: 126},
      extraLaps: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeLapTime = this.changeLapTime.bind(this);
  }

  changeLapTime(selectedOption) {
    this.setState({ lap: selectedOption });
  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({fuelPerLap: event.target.value});
  }

  render() {
    const { lap, lapTime, fuelPerLap } = this.state;
    return (
      <div className={`react-root container card`}>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Lap time:</label>
              <Select
                value={lap}
                onChange={this.changeLapTime}
                options={lapTimePresets}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Fuel use per lap:</label><br />
              <input type="number" className="form-control" value={fuelPerLap} step='0.1' onChange={this.handleChange} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <FuelForDurations
              lapTime={lap.value}
              fuelPerLap={fuelPerLap} />
          </div>
          <div className="col">
            <DurationWithFuel
              lapTime={lap.value}
              fuelPerLap={fuelPerLap} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
