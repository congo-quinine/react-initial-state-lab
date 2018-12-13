// your Bomb code here!
import React from 'react'


class Bomb extends React.Component {
  constructor(prop) {
  super()
  this.state = {
    secondsLeft: prop.initialCount
  }
}


  render() {
      if (this.state.secondsLeft > 0 ){
        return (
          <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        )
      }else if (this.state.secondsLeft  === 0){
        return (
          <div>Boom!</div>
        )
      }


  }
}



export default Bomb

// 1. In the `src/Bomb.js` file, create a `Bomb` React component.
// 2. Its initial state should have a property called `secondsLeft`.
// 3. The initial value of `secondsLeft` is set by passing in an `initialCount` prop to the `Bomb` component. Don't forget to pass the argument props into the constructor (i.e., `constructor(props)`).
// 3. It should render the text `'<SECONDS_LEFT> seconds left before I go boom!'`, where `<SECONDS_LEFT>` is the value of `secondsLeft`.
// 4. **If `secondsLeft` equals `0`, it should render `'Boom!'` instead.**
