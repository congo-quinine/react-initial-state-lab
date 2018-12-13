// your ImageSlider code here!

import React from 'react'

class ImageSlider extends React.Component {
  constructor() {
  super()
  this.state = {
    currentSlideIndex: 0
  }
}


  render() {
    return (
      <div>
      I am on slide {this.state.currentSlideIndex}
      </div>
    )
  }

}


// const ImageSlider = props => <div/>

export default ImageSlider


// 1. In the `src/ImageSlider.js` file, create an `ImageSlider` React component.
// 2. Its initial state should have a property called `currentSlideIndex` that starts at `0`.
// 3. It should only render out the text `'I am on slide <CURRENT_SLIDE>'`, where `<CURRENT_SLIDE>` is the value of `this.state.currentSlideIndex`.
