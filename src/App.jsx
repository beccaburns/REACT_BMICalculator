import React, { Component } from 'react';
import DisplayResult from './Components/displayResult'
import MethodSelect from './Components/methodSelect'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '', 
      height: '',
      method: 'metric'
    }
  }

  methodChange = event => {
    this.setState({ method: event.target.value });
  };

  render() {
    return (
      <div>
        <MethodSelect
          method={this.state.method}
          onChangeValue={this.methodChange}
        />
          
        <h2>Please enter your weight & height below.</h2>
        <div>
          <label>weight {this.state.method === 'metric' ? '(kg)' : '(lbs)'}</label>
          <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
        </div>
        
        <div>
          <label>height {this.state.method === 'metric' ? '(cm)' : '(in)'}</label>
          <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value })} />
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
        />
      </div>
    );
  }
}
export default App;