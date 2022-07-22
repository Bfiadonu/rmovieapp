import React, { Component } from 'react'

export class SpinLoad extends Component {
  render() {
    return (
      <div>
        <div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div>
      </div>
    )
  }
}

export default SpinLoad