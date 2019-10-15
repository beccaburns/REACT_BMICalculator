import React, { Component } from 'react';

class MethodSelect extends Component {
  render() {
    return (
      <div>
      <select form id="method">
        <option value="metric">Metric</option>
        <option Value="imperial">Imperial</option>
      </select>
    </div>
    )
  }
}

export default MethodSelect