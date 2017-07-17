// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    // const { name, speed, hasRockets, colors } = this.props; (include this and just call prop names below instead of "this.props....")
    return(

    <div className="spaceship">
      <p className='name'>Name: {this.props.name}</p>
      <p className="speed">Speed: {this.props.speed}
      </p>

      <p className="hasRockets">Has Rockets?: {this.props.hasRockets}
      </p>
      <ul className="colors">
      Colors: {this.props.colors.map((color) => <li>{color}</li>)}
      </ul>


    </div>
  )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black','red']
}
