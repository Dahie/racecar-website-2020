import React, { Component } from 'react'

import RaceFuelResult from './RaceFuelResult'

class FuelForDuration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      extraLaps: 0
    }
  }

  calculateFuelAmount(duration) {
    let laps = this.calculateFuelLaps(duration) + this.state.extraLaps;
    return Math.round(laps * this.props.fuelPerLap)
  }

  durationInSeconds(duration) {
    return duration * 60
  }

  calculateFuelLaps(duration) {
    return Math.ceil(this.durationInSeconds(duration) / this.props.lapTime)
  }

  render() {
    const durations = [5, 10, 15, 20, 25, 30, 60]

    return (
      <>
        <h4>Requirement</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Load</th>
              <th>Laps</th>
            </tr>
          </thead>
          <tbody>
            {durations.map(duration => (
              <RaceFuelResult
                key={duration}
                duration={duration}
                fuel={this.calculateFuelAmount(duration)}
                laps={this.calculateFuelLaps(duration)} />
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default FuelForDuration;
