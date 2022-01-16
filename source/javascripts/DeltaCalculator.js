import React, { Component } from 'react'

import Select from 'react-select';

import DurationWithFuel from './DurationWithFuel'
import FuelForDurations from './FuelForDurations'
import LapTime from './LapTime'

let lapTimePresets = [];


class DeltaCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lapTimeA: 126,
      lapTimeB: 126,
      pitStopTime: 30,
      pitLaneTime: 52
    }

    this.changeLapTimeA = this.changeLapTimeA.bind(this);
    this.changeLapTimeB = this.changeLapTimeB.bind(this);
    this.changePitStopTime = this.changePitStopTime.bind(this);
    this.changePitLaneTime = this.changePitLaneTime.bind(this);
  }

  changeLapTimeA(event) {
    this.setState({lapTimeA: parseInt(event.target.value)});
  }

  changeLapTimeB(event) {
    this.setState({lapTimeB: parseInt(event.target.value)});
  }

  changePitStopTime(event) {
    this.setState({pitStopTime: parseInt(event.target.value)});
  }

  changePitLaneTime(event) {
    this.setState({pitLaneTime: parseInt(event.target.value)});
  }

  deltaBtoA() {
    return this.state.lapTimeB - this.state.lapTimeA;
  }

  pitStopLoss() {
    return this.state.pitStopTime + this.state.pitLaneTime;
  }

  balancePitStop() {
    const pitStopTotalLoss = this.pitStopLoss();
    const deltaPerLap = this.deltaBtoA();
    let lap = 0;

    if (deltaPerLap <= 0) {
      return 'no delta'
    }

    while(lap * deltaPerLap < pitStopTotalLoss) {
      lap += 1;
    }

    return lap;
  }

  render() {
    const { lapTimeA, lapTimeB, pitStopTime, pitLaneTime } = this.state;
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Lap time A: <LapTime duration={lapTimeA} /></label>
                <div className="col-sm-8">
                  <input type="range" value={lapTimeA} onChange={this.changeLapTimeA} className="form-control-range" min="60" max="180" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Lap time B: <LapTime duration={lapTimeB} /></label>
                <div className="col-sm-8">
                  <input type="range" value={lapTimeB} onChange={this.changeLapTimeB} className="form-control-range" min="60" max="180" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Pit Stop Time: <LapTime duration={pitStopTime} /></label>
                <div className="col-sm-8">
                  <input type="range" value={pitStopTime} onChange={this.changePitStopTime} className="form-control-range" min="0" max="360" />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-sm-4 col-form-label">Pit Lane Time: <LapTime duration={pitLaneTime} /></label>
                <div className="col-sm-8">
                  <input type="range" value={pitLaneTime} onChange={this.changePitLaneTime} className="form-control-range" min="0" max="240" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p>Delta between lap times: {this.deltaBtoA()}s</p>
              <p>Loss through pit stop: {this.pitStopLoss()}s</p>
              <p>Number of laps to balance out extra pitstop: {this.balancePitStop()}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DeltaCalculator;
