import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    return (
      <p>
         <h1>{counter(this.state.secondsLeft)}</h1>
      </p>
    )
  }
}

function counter(seconds) {
  if(seconds > 0) {
    return <h2>{seconds} seconds left before I go boom!</h2>
  } else {
    return <h2>Boom!</h2>
  }
}
