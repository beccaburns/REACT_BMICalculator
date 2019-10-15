import React, { Component } from 'react';
import DisplayResult from './Components/displayResult'
import MethodSelect from './Components/methodSelect'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '', 
      height: '',
      method: ''
    }
  }

  methodChange = (event) => {
    this.setState({
      method: event.target.innerHTML
    })
  }

  render() {
    return (
      <div>
        <h2>Please enter your weight & height below.</h2>
        <div>
          <label>weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
        </div>
        
        <div>
          <label>height(cm)</label>
          <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
        </div>

        <div>
          <select form id="method">
            <option value="metric">Metric</option>
            <option Value="imperial">Imperial</option>
          </select>
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
        />
      </div>
    );
  }
}
export default App;